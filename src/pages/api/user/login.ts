import User from "../../../../Models/User";
import bcrypt from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../utilities/mongodb";
import jwt, { Secret } from "jsonwebtoken";
import cookie from "cookie";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "Method Not Allowed" });
    return;
  }

  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({ message: "Missing email or password" });
    return;
  }

  try {
    await dbConnect();
    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({ message: "User not found" });
      return;
    }

    const correctPassword = await bcrypt.compare(password, user.password);
    if (!correctPassword) {
      res.status(401).json({ message: "Incorrect password" });
      return;
    }

    const { password: userPassword, isAdmin, ...otherDetails } = user._doc;
    const token = jwt.sign(
      { id: user._id, isAdmin },
      process.env.JSON_TOKEN as Secret,
      {
        expiresIn: "1d",
      }
    );
    const cookieValue = cookie.serialize("access_token", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    res.setHeader("Set-Cookie", cookieValue);
    res.status(200).json({ user: otherDetails });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

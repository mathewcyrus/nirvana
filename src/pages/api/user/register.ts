import User from "../../../../Models/User";
import bcrypt from "bcryptjs";
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../utilities/mongodb";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  await dbConnect();
  if (method === "POST") {
    try {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
      const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        password: hash,
      });
      await newUser.save();
      console.log(newUser);
      res.status(201).send(newUser);
    } catch (err) {
      console.log(err);
      res.status(400).send("Failed to create user. try again");
    }
  }
}

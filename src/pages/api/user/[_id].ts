import User from "../../../../Models/User";
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../utilities/mongodb";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  await dbConnect();
  if (method === "PUT") {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.query,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "GET") {
    try {
      const user = await User.findById(req.query);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "DELETE") {
    try {
      await User.findByIdAndDelete(req.query);
      res.status(200).json("User deleted succesfully");
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

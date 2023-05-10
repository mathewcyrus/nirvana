import User from "../../../../Models/User";
import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../utilities/mongodb";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  await dbConnect();
  if (method === "GET") {
    try {
      const allUsers = await User.find();
      res.status(200).json(allUsers);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

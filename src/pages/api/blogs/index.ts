import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../../../utilities/mongodb";
import Blog from "../../../../Models/Blog";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;
  await dbConnect();
  if (method === "POST") {
    try {
      const newBlog = new Blog({
        blogtitle: req.body.blogtitle,
        blogimage: req.body.blogimage,
        startparagraph: req.body.startparagraph,
        likes: req.body.likes,
        views: req.body.views,
      });
      await newBlog.save();
      res.status(201).send(newBlog);
    } catch (error) {
      console.log(error);
    }
  } else if (method === "GET") {
    try {
      const allBlogs = await Blog.find();

      res.status(201).json(allBlogs);
    } catch (error) {
      console.log(error);
    }
  }
}

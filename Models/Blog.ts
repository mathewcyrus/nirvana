import mongoose, { Document } from "mongoose";

export interface BlogInterface extends Document {
  blogimage: String;
  blogtitle: String;
  startparagraph: String;
  likes: Number;
  views: Number;
}
const blogSchema = new mongoose.Schema<BlogInterface>(
  {
    blogimage: {
      type: String,
      required: true,
    },
    blogtitle: {
      type: String,
      required: true,
    },
    startparagraph: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Blogs ||
  mongoose.model<BlogInterface>("Blogs", blogSchema);

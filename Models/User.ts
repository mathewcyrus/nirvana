import mongoose, { Document } from "mongoose";

export interface UserInterface extends Document {
  firstname: String;
  lastname: String;
  email: String;
  phonenumber?: Number;
  isAdmin?: Boolean;
  password: String;
}

const userSchema = new mongoose.Schema<UserInterface>(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: Number,
      default: null,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.models.User ||
  mongoose.model<UserInterface>("User", userSchema);

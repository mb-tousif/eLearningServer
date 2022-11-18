import mongoose from "mongoose";
import validator from "validator";

export const blogSchema = new mongoose.Schema(
  {
    id: String,
    title: {
      type: String,
      required: [true, "Please provide a Blog Name."],
      trim: true,
    },
    user: {
      type: String,
      required: [true, "Please provide a User Name."],
      trim: true,
    },
    imageUrl: {
      type: String,
      validate: [validator.isURL, "Please provide a valid url"],
    },
    description: {
      type: String,
      required: [true, "Please provide Blog description."],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Blogs = mongoose.model("blog", blogSchema);

export default Blogs;

import mongoose from "mongoose";
import validator from "validator";


export const courseSchema = new mongoose.Schema(
  {
    id: String,
    title: {
      type: String,
      required: [true, "Please provide a Course Name."],
      trim: true,
    },
    imageUrl: {
      type: String,
      validate: [validator.isURL, "Please provide a valid url"],
    },
    price: {
      type: Number,
      required: [true, "Please provide Course price."],
    },
    discount: {
      type: Number,
      default: 10,
      enum: {
        values: [ 10, 15, 20],
      },
    },
    description: {
      type: String,
      required: [true, "Please provide Course description."],
      trim: true,
    },
    duration: {
      type: String,
      default: "Three Months",
      enum: {
        values: ["Three Months", "Six Months", "One Year"],
      },
    },
  },
  {
    timestamps: true,
  }
);

const Courses = mongoose.model("course", courseSchema);

export default Courses;
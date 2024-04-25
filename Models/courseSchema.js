import mongoose from "mongoose";
import validator from "validator";

export const courseSchema = new mongoose.Schema(
  {
    id: String,
    title: {
      type: String,
      required: [true, "Please provide a Course Name."],
      trim: true,
      unique: true,
    },
    category: {
      type: String,
      required: [true, "Please provide Category."],
      unique: true,
    },
    imageUrl: {
      type: String,
      validate: [validator.isURL, "Please provide a valid url"],
    },
    courseVideo: [
      {
        id: String,
        playList: String,
        url: {
          type: String,
          validate: [validator.isURL, "Please provide a valid url"],
        },
      },
    ],
    quantity: {
      type: Number,
      default: 1,
    },
    price: {
      type: Number,
      required: [true, "Please provide Course price."],
    },
    discount: {
      type: Number,
      default: 10,
      enum: {
        values: [10, 15, 20],
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
        values: ["One Month", "Three Months", "Six Months", "One Year"],
      },
    },
  },
  {
    timestamps: true,
  }
);

const Courses = mongoose.model("course", courseSchema);

export default Courses;
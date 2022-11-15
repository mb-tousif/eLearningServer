import mongoose from "mongoose";
import validator from "validator";

export const reviewSchema = new mongoose.Schema(
  {
    id: String,
    name: {
      type: String,
      unique: true,
      required: [true, "Please provide reviewer Name."],
      trim: true,
    },
    imageUrl: {
      type: String,
      validate: [validator.isURL, "Please provide a valid url"],
    },
    position: {
      type: String,
      required: [true, "Please provide your designation."],
    },
    review: {
      type: String,
      required: [true, "Please give us your valued review."],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Reviews = mongoose.model("review", reviewSchema);

export default Reviews;
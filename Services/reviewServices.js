import Reviews from "../Models/reviewSchema.js";

export const postReview = async (reviewInfo) => {
  const result = await Reviews.create(reviewInfo);
  return result;
};

export const getAllReviews = async () => {
  const result = await Reviews.find({});
  return result;
};
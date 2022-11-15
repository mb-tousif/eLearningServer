import { getAllReviews, postReview } from "../Services/reviewServices.js";


export const addReview = async ( req, res ) => {
    try {
        const reviewInfo = req.body;
        const review = await postReview(reviewInfo);
        await review.save();
        res.status(200).json({
          status: "success",
          message: "Successfully review Added",
        });
    } catch (error) {
        res.status(500).json({
          status: "fail",
          message: "Review could not add in database",
        });
    }
}

export const allReviews = async (req, res) => {
  try {
    const reviews = await getAllReviews();
    res.status(200).json({
      status: "success",
      data: reviews,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Could not find any review!",
    });
  }
};
// import express from "express";
// import Stripe from "stripe";

// const router = express.Router();
// dotenv.config();

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// router.get("/checkout", (req, res) => {
//   res.render("checkout", {
//     stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
//   });
// });

// router.post("/charge", async (req, res) => {
//   try {
//     const { token, amount } = req.body;
//     const charge = await stripe.charges.create({
//       amount: amount,
//       currency: "usd",
//       description: "Course charge has taken successfully.",
//       source: token,
//     });
//     res.json({ message: "Success" });
//   } catch (error) {
//     res.status(500).send(error.message);
//   }
// });
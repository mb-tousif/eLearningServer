import Stripe from "stripe";
import dotenv from "dotenv";
import { getPaymentData, postPayment } from "../Services/paymentServices.js";
import paymentData from "../Models/paymentModel.js";

dotenv.config();

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

export const createPayment = async (req, res) => {
  try {
    const service = req.body;
    const price = service.price;
    const amount = price * 100;
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "usd",
      payment_method_types: ["card"],
    });
    res.send({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* export const storePayment = async (req, res) => {
  let data=new Payment(req.body)
  let result=await data.save()
  console.log(result)
  res.send(result)
} */

// Store payment details in  database
export const storePayment = async (req, res) => {
  const exist = await paymentData.findOne({ email: req.body.email });
  try {
    if (exist) {
      return res.status(401).json({ message: "Your Payment already done" });
    } else {
      const paymentInfo = req.body;
      const payment = await postPayment(paymentInfo)
      res.status(200).json({ message: payment });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Payment details from database
export const getPayment = async (req, res) => {
  try {
    const purchasedCourse = await getPaymentData();
    res.status(200).json(purchasedCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

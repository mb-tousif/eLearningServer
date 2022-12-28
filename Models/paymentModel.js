import mongoose from "mongoose";

export const paymentSchema = new mongoose.Schema({
  id: String,
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  paymentId: {
    type: String,
  },
  amount: {
    type: Number,
  },
});

const paymentData = mongoose.model("payment", paymentSchema);

export default paymentData;

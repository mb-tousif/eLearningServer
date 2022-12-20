import mongoose from "mongoose";

export const paymentSchema = new mongoose.Schema({
  userId: String,
  payment: {
    type: Boolean,
    enum: [true, false],
  },
});

const paymentModel = mongoose.model("Payment", paymentSchema);

export default paymentModel;

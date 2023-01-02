import paymentData from "../Models/paymentModel.js";

export const postPayment = async (paymentInfo) => {
  const result = await paymentData.create(paymentInfo);
  return result;
};

export const getPaymentData = async () => {
  const result = await paymentData.find({});
  return result;
};
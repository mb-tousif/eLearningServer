import mongoose from "mongoose"
import dotenv from "dotenv";
dotenv.config();

const Connection = async (req, res) => {
  const url = process.env.MONGODB_CONNECTION_URL;
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(url);
    console.log("🥒 Database connection 🥑 is successful 🥕");
  } catch (error) {
    console.log("🍅 Error while 👽 connecting with DB 🍄");
  }
};

export default Connection;

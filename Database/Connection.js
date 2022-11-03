import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";
dotenv.config();


const Connection = async (req, res) => {
  const url = process.env.MONGODB_CONNECTION_URL;
  try {
    await mongoose.connect(url);
    console.log("🥒 Database connection 🥑 is successful 🥕".blue.bold);
  } catch (error) {
    console.log("🍅 Error while 🍉 connecting with DB 🍄".red.bold);
  }
};

export default Connection;

import express from "express";
import cors from "cors";
import colors from "colors";
import dotenv from "dotenv";

const port = process.env.PORT || 4000;
const app = express();
dotenv.config();
app.use(cors());


app.listen(port, (req, res) => {
  console.log(`Server running on PORT: ${port}`.rainbow.bold);
});
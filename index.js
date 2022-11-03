import express from "express";
import cors from "cors";
import colors from "colors";
import dotenv from "dotenv";
import Connection from "./Database/Connection.js";
import router from "./Routes/Routes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

Connection()

app.use("api/v1", router)

app.get("/", (req, res) => {
  res.send(
    "<h1 style='text-align: center; padding: 20px; color:#753a88'><span style='color: green'>🛢 </span>Server is successfully 🌽 running 🥦</h1>"
  );
});

app.listen(port, (req, res) => {
  console.log(`Server running on PORT: ${port}`.rainbow.bold);
});
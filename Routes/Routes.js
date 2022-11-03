import express from "express";
import { login, signup } from "../Controllers/userController.js";
// import {verifyToken} from "../Middleware/verifyToken.js";


const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);


export default router;
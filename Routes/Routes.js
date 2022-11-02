import express from "express";
import { confirmEmail, getSingleUser, login, signup } from "../Controllers/userController.js";
import {verifyToken} from "../Middleware/verifyToken.js";


const router = express.Router();

router.post("/signup", signup);
router.get("/signup/confirmation/:token", confirmEmail);
router.post("/login", login);
router.get("/user", verifyToken, getSingleUser);


export default router;
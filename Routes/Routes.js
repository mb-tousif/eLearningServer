import express from "express";
import { addCourse, allCourses, singleCourse } from "../Controllers/courseController.js";
import { login, signup } from "../Controllers/userController.js";
// import {verifyToken} from "../Middleware/verifyToken.js";


const router = express.Router();

// Authentication Routes
router.post("/signup", signup);
router.post("/login", login);

// Courses Routes
router.get("/allCourses", allCourses)
router.get("/course/:id", singleCourse)
router.post("/course", addCourse)

export default router;
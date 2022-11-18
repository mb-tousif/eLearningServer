import express from "express";
import { addBlog, allBlogs, singleBlog } from "../Controllers/blogController.js";
import { addCourse, allCourses, singleCourse } from "../Controllers/courseController.js";
import { addReview, allReviews } from "../Controllers/reviewController.js";
import { login, signup } from "../Controllers/userController.js";
// import {verifyToken} from "../Middleware/verifyToken.js";


const router = express.Router();

// Authentication Routes
router.post("/signup", signup);
router.post("/login", login);

// Courses Routes
router.get("/allCourses", allCourses);
router.get("/course/:id", singleCourse);
router.post("/course", addCourse);

// Blogs Routes
router.get("/allBlogs", allBlogs);
router.get("/blog/:id", singleBlog);
router.post("/blog", addBlog);

// Review Routes
router.post("/review", addReview);
router.get("/allReviews", allReviews);

export default router;
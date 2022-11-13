import mongoose from "mongoose";
import validator from "validator";


export const courseSchema = new mongoose.Schema({
  id: String,
  tittle: {
    type: String,
    required: [true, "Please provide a Course Name."],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Please provide Course price."],
  },
  description: {
    type: String,
    required: [true, "Please provide Course description."],
    trim: true,
  },
//   mentor: {
//     ref: 
//   },
},{
  timestamps: true
});

const Courses = mongoose.model("course", courseSchema);

export default Courses;
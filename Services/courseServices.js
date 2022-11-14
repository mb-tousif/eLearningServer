import Courses from "../Models/courseSchema.js";

export const postCourse = async (courseInfo) => {
  const result = await Courses.create(courseInfo);
  return result;
};

export const getAllCourses = async () => {
    const result = await Courses.find({})
    return result;
}

export const getCourseById = async (id) => {
  const result = await Courses.findById({ _id: id });
  return result;
};
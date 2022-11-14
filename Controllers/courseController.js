import { getAllCourses, getCourseById, postCourse } from "../Services/courseServices.js";

export const allCourses = async ( req, res ) => {
    try {
        const courses = await getAllCourses();
        res.status(200).json({
          status: "success",
          data: courses
        });
    } catch (error) {
       res.status(500).json({
         status: "fail",
         message: "Could not find any courses!",
       }); 
    }
}

export const singleCourse = async (req, res) => {
  try {
    const id = req.params.id 
    const course = await getCourseById( id );
    res.status(200).json({
      status: "success",
      data: course,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Could not find this course!",
    });
  }
};

export const addCourse = async (req, res) => {
  try {
    const courseInfo = req.body;
    const result = await postCourse(courseInfo);
    // console.log(result);
    await result.save();
    res.status(200).json({
      status: "success",
      message: "Successfully Course Added",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Course could not add in database",
    });
  }
};

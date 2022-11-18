import { getAllBlogs, getBlogById, postBlog } from "../Services/blogServices.js";


export const allBlogs = async ( req, res ) => {
    try {
        const blogs = await getAllBlogs();
        res.status(200).json({
          status: "success",
          data: blogs
        });
    } catch (error) {
       res.status(500).json({
         status: "fail",
         message: "Could not find any Blogs!",
       }); 
    }
}

export const singleBlog = async (req, res) => {
  try {
    const id = req.params.id 
    const blog = await getBlogById( id );
    res.status(200).json({
      status: "success",
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Could not find this Blog!",
    });
  }
};

export const addBlog = async (req, res) => {
  try {
    const blogInfo = req.body;
    const result = await postBlog(blogInfo);
    // console.log(result);
    await result.save();
    res.status(200).json({
      status: "success",
      message: "Successfully Blog Added",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Blog could not add in database",
    });
  }
};

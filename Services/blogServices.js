import Blogs from "../Models/blogSchema.js";

export const postBlog = async (blogInfo) => {
  const result = await Blogs.create(blogInfo);
  return result;
};

export const getAllBlogs = async () => {
  const result = await Blogs.find({});
  return result;
};

export const getBlogById = async (id) => {
  const result = await Blogs.findById({ _id: id });
  return result;
};

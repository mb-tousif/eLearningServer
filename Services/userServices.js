import Users from "../Models/userSchema.js";

export const signupService = async (userInfo) => {
  const result = await Users.create(userInfo);
  return result;
};

export const findUserByEmail = async (email) => {
  return await Users.findOne({ email });
};

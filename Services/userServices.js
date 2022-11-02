import Users from "../Models/userSchema.js";


export const signupService = async (userInfo) => {
  const user = await Users.create(userInfo);
  return user;
};

export const findUserByEmail = async (email) => {
  return await Users.findOne({ email });
};

export const findUserByToken = async (token) => {
  return await Users.findOne({ confirmationToken: token });
};
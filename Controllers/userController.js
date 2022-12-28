import { findUserByEmail, getUsers, signupService } from "../Services/userServices.js";
import { generateToken } from "../Utilities/token.js";

export const signup = async (req, res) => {
  try {
    const userInfo = req.body;
    const result = await signupService(userInfo);
    // console.log(result);
    await result.save();
    res.status(200).json({
      status: "success",
      message: "Successfully signed up",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Signed up Failed",
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        status: "fail",
        error: "Please provide your credentials",
      });
    }

    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(401).json({
        status: "fail",
        error: "No user found. Please create an account",
      });
    }

    const isPasswordValid = user.comparePassword(password, user.password);

    if (!isPasswordValid) {
      return res.status(403).json({
        status: "fail",
        error: "Password is not correct",
      });
    }

    if (user.status == "Inactive") {
      return res.status(401).json({
        status: "fail",
        error: "User is not an active user.",
      });
    }

    const token = generateToken(user);
    const { password: pwd, ...others } = user.toObject();

    res.status(200).json({
      status: "success",
      message: "Successfully logged in",
      // data: {
      //   user: others,
      //   token,
      // },
      user: others,
      token,
      // email: user.email,
      // role: user.role,
      // userStatus: user.status,
      // token: user.token
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Logged in Failed!",
    });
  }
};

export const getAllUser = async ( req, res ) => {
  try {
    const users = await getUsers();
    res.status(200).json({
      status: "success",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Could not find any Users",
    });
  }
}


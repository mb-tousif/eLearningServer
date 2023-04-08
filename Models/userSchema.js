import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
// const crypto = await import("node:crypto");
const saltRounds = 12;

export const userSchema = new mongoose.Schema(
  {
    id: String,
    fullName: {
      type: String,
      required: [true, "Please provide a first name"],
      trim: true,
      minLength: [3, "Name must be at least 3 characters."],
      maxLength: [100, "Name is too large"],
    },
    email: {
      type: String,
      validate: [validator.isEmail, "Provide a valid Email"],
      trim: true,
      unique: true,
      required: [true, "Email address is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      validate: {
        validator: (value) =>
          validator.isStrongPassword(value, {
            minLength: 6,
            minLowercase: 3,
            minNumbers: 1,
            minUppercase: 1,
            minSymbols: 1,
          }),
        message: "Password {VALUE} is not strong enough.",
      },
    },
    role: {
      type: String,
      enum: {
        values: ["Student", "Admin", "Teacher"],
        message: "{VALUE} is not a correct Role for user!",
      },
      required: [true, "Role is required"],
    },
    contactNumber: {
      type: String,
      validate: [validator.isMobilePhone, "Please provide a valid contact number"],
    },
    image: {
      type: String,
      validate: [validator.isURL, "Please provide a valid url"],
    },
    gender: {
      type: String,
      enum: {
        values: ["Male", "Female", "Others"],
        message: "{VALUE} is not a correct type of Gender for user!",
      },
      required: [true, "Gender is required"],
    },
    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", function (next) {

  if (!this.isModified("password")) {
    return next();
  }

  const password = this.password;
  const hashedPassword = bcrypt.hashSync(password, 12);
  this.password = hashedPassword;

  next();

});

userSchema.methods.comparePassword = function (password, hash) {
  const isPasswordValid = bcrypt.compareSync(password, hash);
  return isPasswordValid;
};


const Users = mongoose.model("user", userSchema);

export default Users;

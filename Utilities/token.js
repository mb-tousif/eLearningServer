import jwt from " jsonwebtoken";
const { sign } = jwt;

export const generateToken = (user) => {
  const payload = {
    email: user.email,
    role: user.role,
  };

  const token = jwt.sign(payload, process.env.SECRET_TOKEN, {
    expiresIn: "7days",
  });

  return token;
};

import jwt from "jsonwebtoken";

export const generateTokensAndSetCookies = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    sameSite: "strict",
    httpOnly: true,
    strict: process.env.NODE_ENV !== "development",
  });
};

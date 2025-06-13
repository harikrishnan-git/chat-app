import bcrypt from "bcryptjs";
import { User } from "../models/user.auth.js";
import { generateTokensAndSetCookies } from "../utils/generate_token.js";

export const Signup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      console.log("password variation");
      res.status(500).json({ error: "Password doesn't match confirmation" });
    }

    const user = await User.findOne({ userName });
    if (user) {
      console.log("Duplicate username");
      res.status(500).send({ error: "Duplicate user" });
    }

    const boyProfile = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfile = `https://avatar.iran.liara.run/public/girl?username=${userName}`;
    const hash_password = await bcrypt.hash(password, 10);
    const newUser = await new User({
      fullName,
      userName,
      password: hash_password,
      gender,
      profilePic: gender === "male" ? boyProfile : girlProfile,
    });

    if (newUser) {
      newUser
        .save()
        .then((result) => {
          try {
            generateTokensAndSetCookies(result._id, res); // Use saved user's ID
            res.status(201).json({
              _id: result._id,
              fullName: result.fullName,
              userName: result.userName,
              gender: result.gender,
              profilePic: result.profilePic,
            });
          } catch (error) {
            console.error(
              "Error in token generation or setting cookies:",
              error.message
            );
            return res.status(500).json({ error: "Token generation failed" });
          }
        })
        .catch((err) => {
          console.log(err);
          return res
            .status(500)
            .json({ error: "Error while saving user", details: err.message });
        });
    } else {
      res.status(500).json({ error: "Data invalid" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ error: "Internal server error" });
  }
};

export const Login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });
    const isPassword = await bcrypt.compare(password, user.password || "");
    if (!user || !isPassword) {
      console.log("Invalid password or username");
      return res.status(400).json({ error: "Invalid username or password" });
    }
    generateTokensAndSetCookies(user._id, res);
    res.status(201).json({
      _id: user._id,
      fullName: user.fullName,
      userName: user.userName,
      gender: user.gender,
      profilePic: user.profilePic,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Login internal error" });
  }
};

export const Logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.json("Logged out");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Login internal error" });
  }
};

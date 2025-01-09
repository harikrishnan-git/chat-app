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
          generateTokensAndSetCookies(newUser._id, res);
          res.status(201).json({
            _id: newUser._id,
            fullName: newUser.fullName,
            userName: newUser.userName,
            gender: newUser.gender,
            profilePic: newUser.profilePic,
          });
        })
        .catch((err) => {
          console.log(err);
          return res.status(500).json({ error: "Error while saving user" });
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
      res.status(400).json({ error: "Invalid username or password" });
      console.log("Invalid password or username");
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

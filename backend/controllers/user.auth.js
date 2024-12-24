import bcrypt from "bcryptjs";
import { User } from "../models/user.auth.js";

export const Signup = async (req, res) => {
  try {
    const { fullName, userName, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      console.log("password variation");
      res.status(500).send({ error: "Password doesn't match confirmation" });
    }

    const user = await User.findOne({ userName });
    if (user) {
      console.log("Duplicate username");
      res.status(500).send({ error: "Duplicate user" });
    }

    const boyProfile = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfile = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUser = await new User({
      fullName,
      userName,
      password,
      gender,
      profilePic: gender === "male" ? boyProfile : girlProfile,
    });

    newUser
      .save()
      .then((result) => {
        res.status(201).json({
          _id: newUser._id,
          fullName: newUser.fullName,
          userName: newUser.userName,
          gender: newUser.gender,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    res.redirect("/auth/login");
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ error: "Internal server error" });
  }
};

export const Login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = User.findOne({ userName });
    const isPassword = await bcrypt.compare(password, user.password || "");
    if (!user && !isPassword) {
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
  }
};

import { User } from "../models/user.auth.js";

export const getUsers = async (req, res) => {
  try {
    const thisId = req.user._id;
    const allUsers = await User.find({ _id: { $ne: thisId } }).select(
      "-password"
    );
    res.send(allUsers);
  } catch (error) {
    console.log("error in obtaining users for sidebar", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

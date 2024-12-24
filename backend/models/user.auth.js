import mongoose from "mongoose";

const authSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
    minLength: 3,
  },
  password: {
    type: String,
    required: true,
    minLength: 4,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
  },
  profilePic: {
    type: "String",
    default: "",
  },
});

export const User = mongoose.model("User", authSchema);

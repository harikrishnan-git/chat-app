import mongoose from "mongoose";

export const authConn = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongoose connected.");
  } catch (err) {
    console.log(err);
  }
};

import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";

import authrouter from "./routes/user.auth.js";
import msgRouter from "./routes/message.route.js";
import { authConn } from "./db/user.auth.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authrouter);
app.use("/api/message", msgRouter);

app.listen(PORT, () => {
  authConn();
  console.log(`Listening to ${PORT}`);
  app.use("/api/auth", authrouter);
});

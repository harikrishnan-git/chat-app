import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";

import { server, app } from "./socket/socket.js";
import authRouter from "./routes/user.auth.js";
import msgRouter from "./routes/message.route.js";
import usersRouter from "./routes/users.js";
import { authConn } from "./db/user.auth.js";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/message", msgRouter);
app.use("/api/users", usersRouter);

server.listen(PORT, () => {
  authConn();
  console.log(`Listening to ${PORT}`);
});

import dotenv from "dotenv";
dotenv.config();
import express from "express";

import { router } from "./routes/user.auth.js";
import { authConn } from "./db/user.auth.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/auth", router);

app.listen(PORT, () => {
  authConn();
  console.log(`Listening to ${PORT}`);
  app.use("/auth", router);
});

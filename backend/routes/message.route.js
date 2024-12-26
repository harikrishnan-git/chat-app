import express from "express";
import { sendMsg } from "../controllers/message.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/send/:id", protectRoute, sendMsg);

export default router;

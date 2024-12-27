import express from "express";
import { sendMsg, getMsg } from "../controllers/message.js";
import protectRoute from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/send/:id", protectRoute, sendMsg);

router.get("/:id", protectRoute, getMsg);

export default router;

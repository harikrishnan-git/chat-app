import express from "express";
import { Signup, Login } from "../controllers/user.auth.js";

export const router = express.Router();

router.post("/signup", Signup);

router.post("/login", Login);

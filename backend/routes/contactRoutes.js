import express from "express";
import { addMessage, getMessages } from "../controllers/contactController.js";

const router = express.Router();

// POST: user sends message
router.post("/", addMessage);

// GET: admin fetch all messages
router.get("/", getMessages);

export default router;

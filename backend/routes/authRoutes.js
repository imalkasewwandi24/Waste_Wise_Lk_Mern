import express from "express";
import { register, login } from "../controllers/authController.js";
import { body } from "express-validator";

const router = express.Router();

router.post(
  "/register",
  [
    body("fullName").notEmpty().withMessage("Full name required"),
    body("email").isEmail().withMessage("Valid email required"),
    body("contactNumber").notEmpty().withMessage("Contact number required"),
    body("address").notEmpty().withMessage("Address required"),
    body("password").isLength({ min: 6 }).withMessage("Password min 6 chars"),
    body("confirmPassword").notEmpty().withMessage("Confirm password required")
  ],
  register
);

router.post("/login", login);

export default router;
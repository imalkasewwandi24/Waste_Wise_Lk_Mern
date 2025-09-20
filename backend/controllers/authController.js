import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";

// REGISTER (User/Driver)
export const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  try {
    const { fullName, email, contactNumber, address, password, confirmPassword, role } = req.body;

    // Check existing
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email already registered" });

    if (password !== confirmPassword) return res.status(400).json({ message: "Passwords do not match" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      fullName,
      email,
      contactNumber,
      address,
      password: hashedPassword,
      role
    });

    res.status(201).json({ message: "Registered successfully", userId: user._id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// LOGIN (All roles)
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1d"
    });

    res.json({
      message: "Login successful",
      token,
      role: user.role,
      user: { id: user._id, fullName: user.fullName, email: user.email }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

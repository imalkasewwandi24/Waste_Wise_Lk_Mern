import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import User from "./models/User.js";
import bcrypt from "bcryptjs";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

// Create admin if not exists
const createAdmin = async () => {
  const adminExists = await User.findOne({ email: process.env.ADMIN_EMAIL });
  if (!adminExists) {
    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD, 10);
    await User.create({
      fullName: "System Admin",
      email: process.env.ADMIN_EMAIL,
      contactNumber: "0000000000",
      address: "HQ",
      password: hashedPassword,
      role: "admin"
    });
    console.log("✅ Admin account created");
  }
};
createAdmin();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

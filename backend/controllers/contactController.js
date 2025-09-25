import Contact from "../models/Contact.js";

// Add new message
export const addMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newMessage = new Contact({ name, email, message });
    await newMessage.save();

    res.status(201).json({ message: "Message sent successfully", data: newMessage });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get all messages (admin use)
export const getMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

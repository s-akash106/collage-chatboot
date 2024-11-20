// server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Predefined responses
const responses = {
  "hello": "Hi! Welcome to our college website. How can I assist you?",
  "admission": "Admissions open from May to June. Visit the Admissions page for details.",
  "courses": "We offer Engineering, Arts, Commerce, and Science courses.",
  "contact": "You can email us at info@college.edu or call +1234567890.",
  "default": "I'm sorry, I don't have the information you're looking for."
};

// API route to handle chatbot messages
app.post("/chat", (req, res) => {
  const userMessage = req.body.message.toLowerCase();
  const botResponse = responses[userMessage] || responses["default"];
  res.json({ response: botResponse });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

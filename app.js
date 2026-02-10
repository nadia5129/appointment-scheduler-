// Import express
import express from "express";

// Create app
const app = express();

// Port
const PORT = 3005;

// Serve static files from public
app.use(express.static("public"));

// Allow express to read form data
app.use(express.urlencoded({ extended: true }));

// Create a temporary array to store appointments
const appointments = [];

// Home route
app.get("/", (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// Confirmation route
app.get("/thank-you", (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/confirmation.html`);
});

// Admin route 
app.get("/admin", (req, res) => {
  res.send(appointments);
});

// Appointment POST route 
app.post("/appointments", (req, res) => {

  const fname = (req.body.fname || "").trim();
  const lname = (req.body.lname || "").trim();

  // Server-side validation
  if (!fname || !lname) {
    return res.status(400).send("First and last name are required.");
  }

  // Create appointment object
  const appointment = {
    fname,
    lname,
    date: req.body.date,
    time: req.body.time,
    timestamp: new Date()
  };

  // Save appointment
  appointments.push(appointment);

  // Send to confirmation page
res.redirect("/thank-you");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

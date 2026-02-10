// Import express
import express from "express";

// Create app
const app = express();

// Port
const PORT = 3005;
//array of users
const submit =[];
//middleware to parse JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public
app.use(express.static("public"));

// Home route
app.get("/", (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/home.html`);
});

app.post('/submit', (req, res) => {
  submit.push(req.body);
  res.sendFile(`${import.meta.dirname}/views/submit-form.html`);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
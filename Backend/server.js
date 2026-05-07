const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Hospital backend is running' });
});

app.get('/api/patients', (req, res) => {
  db.all('SELECT * FROM patients', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const demoUsers = {
    "admin@hospital.com": "admin123",
    "doctor@hospital.com": "doctor123",
    "nurse@hospital.com": "nurse123",
    "reception@hospital.com": "reception123"
  };

  if (demoUsers[email] && demoUsers[email] === password) {
    res.json({ success: true });
  } else {
    res.status(401).json({ success: false, message: "Invalid email or password" });
  }
});

app.listen(PORT, () => {
  console.log(`Hospital backend running at http://localhost:${PORT}`);
});
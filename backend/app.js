const express = require('express');
const mongoose = require('mongoose');
const User = require('./schema'); // Assuming schema.js is in the same directory
const app = express();
const cors = require('cors');
app.use(cors()); // Enable CORS for all routes

const dbConnect = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/mydatabase', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
  }
}

dbConnect();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Fullstack App Backend!');   
});

app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' });
  }
});

app.post('/api/users', async (req, res) => {
    console.log(req.body);
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: 'Error creating user' });
  }
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});

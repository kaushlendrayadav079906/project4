const bcrypt = require('bcryptjs');
const user_model = require('../models/user.model');
const jwt = require('jsonwebtoken');
const secret = 'yourSecretKey'; // Replace with your actual secret key

// Signup function
exports.signup = async (req, res) => {
  const { name, userId, email, password, userType } = req.body;

  try {
    // Check if user already exists
    let existingUser = await user_model.findOne({ userId });
    if (existingUser) {
      return res.status(400).send('User already exists');
    }

    // Hash password and create user
    const hashedPassword = bcrypt.hashSync(password, 8);
    const newUser = new user_model({
      name,
      userId,
      email,
      userType,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).send(`User ${newUser.name} created successfully`);
  } catch (error) {
    res.status(500).send('Error occurred during signup');
  }
};

// Signin function
exports.signin = async (req, res) => {
  const { userId, password } = req.body;

  try {
    // Check if user exists
    const user = await user_model.findOne({ userId });
    if (!user) {
      return res.status(404).send('User not found');
    }

    // Validate password
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).send('Invalid password');
    }

    // Generate token
    const token = jwt.sign({ id: user.userId }, secret, {
      expiresIn: 120, // Token expires in 120 seconds (2 minutes)
    });

    // Respond with user data and token
    res.status(200).send({
      name: user.name,
      userId: user.userId,
      email: user.email,
      userType: user.userType,
      accessToken: token,
    });
  } catch (error) {
    res.status(500).send('Error occurred during signin');
  }
};

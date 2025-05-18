const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/usermodel');

// Sign Up Controller
exports.signup = async (req, res) => {
  const { name, email, password, role } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user with default role 'student' if not provided
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || 'student'
    });

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
};

// Login Controller
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const bcrypt = require('bcryptjs');
  bcrypt.hash('johns', 10).then(console.log);
  try {
    // Find user by email
    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    
    console.log('User Password from DB:', user.password);
    console.log('Password from request:', password);


    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log('Password Match:', isMatch);  // Debugging password match
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }
    

    // Generate JWT
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  }catch (error) {
    console.error(error);  // Log the actual error for debugging
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
};

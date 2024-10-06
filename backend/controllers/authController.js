const User = require("../model/User");

exports.login = async (req, res) => {
  res.send("hello");
};



exports.register = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;
  

  // Basic validation for required fields
  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password are required",
    });
  }

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Prepare user data, include optional fields if present
    let userData = {
      email,
      password,
    };

    if (first_name) {
      userData.first_name = first_name;
    }

    if (last_name) {
      userData.last_name = last_name;
    }

    // Create new user instance
    user = new User(userData);
    await user.save(); // This will trigger the password hashing

    // Send success response
    res.status(200).json({
      status: 200,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    // Log the error for debugging
    console.error(error);

    // Return server error
    res.status(500).json({
      message: "Server error occurred",
    });
  }
};

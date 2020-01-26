const JWT = require('jsonwebtoken');
const User = require('../models/User');

let signToken = user => {
  return JWT.sign(
    {
      iss: 'the-wardobe',
      sub: user.id,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 7)
    },
    process.env.JWT_SECRET
  );
};

exports.sign_up = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    //Check if there is a user with the same email
    const foundUser = await User.findOne({ 'local.email': email });

    if (foundUser) {
      return res
        .status(403)
        .json({ success: false, message: 'Email is already taken.' });
    }

    //Otherwise create a new user
    const newUser = new User({
      method: 'local',
      local: {
        name: name,
        email: email,
        password: password
      }
    });
    await newUser.save();

    //Generate Token
    const token = signToken(newUser);
    console.log(token);
    //Response token
    res.status(200).json({ success: true, token: token });
  } catch (e) {
    console.log('error: ', e);
  }
};

exports.sign_in = async (req, res, next) => {
  try {
    const token = signToken(req.user);
    res.status(200).json({ success: true, token: token });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again'
    });
  }
};

exports.google_oauth = async (req, res, next) => {
  try {
    const token = signToken(req.user);
    res.status(200).json({ success: true, token: token });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again'
    });
  }
};

exports.facebook_oauth = async (req, res, next) => {
  try {
    const token = signToken(req.user);
    res.status(200).json({ success: true, token: token });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again'
    });
  }
};

exports.secret = async (req, res, next) => {
  try {
    console.log(req.user);
    res.json({ success: true, secret: 'resource' });
  } catch (e) {
    console.log(e);
    res.json({ error: e });
  }
};

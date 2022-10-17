const User = require("../models/User")
const crypto = require("crypto");
const { generateAccessToken, generateRefreshToken } = require("../scripts/helper");
const jwt = require("jsonwebtoken")

const register = async (req, res) => {
  const hash = crypto.createHash('sha256').update(req.body.password).digest('base64');

  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: hash
  })
  try {
    console.log(newUser);
    const user = await newUser.save()
    res.status(201).json(user)
  } catch (err) {
    console.log(err);
    res.status(500).json(err)
  }

}


const login = async (req, res) => {
  const email = req.body.email
  const password = req.body.password
  try {
    const user = await User.findOne({ email })
    if (!user) {
      res.status(401).json({ message: "Email is not found!" })
      return
    }
    const dbPassword2 = crypto.createHash('sha256').update(password).digest('base64');

    if (user.password === dbPassword2) {
      const payload = {"_id": user._id.toString(), "email": user.email}
      console.log(payload);
      const accessToken = jwt.sign({ payload }, process.env.JWT_SECRET_KEY, { expiresIn: "1d" })
      const refreshToken = jwt.sign({ payload }, process.env.JWT_SECRET_KEY)

      res.cookie('access_token', accessToken, {
        origin: '*',
        httpOnly: true
      })
      res.cookie('refresh_token', refreshToken, {
        origin: '*',
        httpOnly: true
      })
      res.status(200).json(user)
    }else{
      res.status(401).json("Password is wrong...")
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err.stack)
  }
}

const logout = (req,res) => {
  res.clearCookie('access_token');
  res.clearCookie('refresh_token');
  res.status(200).json('Logout success')}





module.exports = {
  login,
  register,
  logout
}
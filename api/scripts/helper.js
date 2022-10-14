const jwt = require("jsonwebtoken")


const generateAccessToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "1d" })
  
}

const generateRefreshToken = (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET_KEY)
}



module.exports = {
    generateAccessToken,
    generateRefreshToken
}
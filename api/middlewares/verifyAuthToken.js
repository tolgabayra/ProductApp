const jwt = require('jsonwebtoken');

const verifyAuthToken = (req, res, next) => {
    const authHeader = req.cookies.access_token;

    if (authHeader) {
        jwt.verify(authHeader, "mySecretKey", (err, user) => {
            if (err) {
                return res.status(403).json("Token is not valid!");
            }
            req.user = user;
            next();
        });
    } else {
        res.status(401).json("You are not authenticated!");
    }
};


module.exports = verifyAuthToken
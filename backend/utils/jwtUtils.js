const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');


dotenv.config();

const generateToken = (userId) => {
    const token = jwt.sign({id: userId} , process.env.JWT_SECRET, {expiresIn: '1h'})
return token ;
}

module.exports = { generateToken };
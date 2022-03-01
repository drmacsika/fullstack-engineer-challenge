const jwt = require('jsonwebtoken');

const { SECRET_KEY } = require('../config/config');

const generateToken = (user: any) => {
    return jwt.sign(
        {
            id: user.id,
            email: user.email,
            username: user.username
        },
        SECRET_KEY,
        { expiresIn: '1h' }
    );
}

export default generateToken;
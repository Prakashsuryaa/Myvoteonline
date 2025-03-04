import { verify } from 'jsonwebtoken';

const auth = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).send('No token, authorization denied');
    }

    try {
        const decoded = verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).send('Token is not valid');
    }
};

export default auth;

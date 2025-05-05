import jwt from 'jsonwebtoken';

// user authentication middleware
const authUser = async (req, res, next) => {
    // Extract token from Authorization header
    const authHeader = req.headers.authorization;
    
    // Check if token is present in the Authorization header
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: 'Not Authorized. Login Again' });
    }

    // Get token by splitting the Authorization header
    const token = authHeader.split(' ')[1];

    try {
        // Verify the token using JWT_SECRET from environment variables
        const token_decode = jwt.verify(token, process.env.JWT_SECRET);

        // Attach user ID from decoded token to the request body for later use
        req.body.userId = token_decode.id;

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        console.log(error);
        // Return Unauthorized error if token is invalid or expired
        return res.status(401).json({ success: false, message: 'Invalid or expired token' });
    }
};

export default authUser;

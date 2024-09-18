const user_model = require('../models/user.model');

exports.verifySignUpBody = async (req, res, next) => {
    try {
        // Destructure the required fields from the request body
        const { name, email, userId, password } = req.body;

        // Check if all required fields are present
        if (!name || !email || !userId || !password) {
            return res.status(400).send({
                message: "Missing required fields: name, email, userId, or password",
            });
        }

        // Check if email format is valid (basic regex check)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).send({
                message: "Invalid email format",
            });
        }

        // Check if password meets strength requirements (min 6 characters for example)
        if (password.length < 6) {
            return res.status(400).send({
                message: "Password must be at least 6 characters long",
            });
        }

        // Convert userId to lowercase for case-insensitive search
        const existingUser = await user_model.findOne({ userId: userId.toLowerCase() });
        if (existingUser) {
            return res.status(400).send({
                message: "User with the same userId already exists",
            });
        }

        // Proceed to the next middleware or route handler
        next();
    } catch (err) {
        console.error("Error while validating signup data:", err);
        res.status(500).send({ message: "Error while validating signup data" });
    }
};

const express = require('express');
const router = express.Router();
const { body } = require("express-validator");
const userController = require('../controllers/user.controller');
// const authMiddleware = require('../middleware/auth.middleware');

router.post('/register', [
    
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name muste be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 3 characters'),

],
    userController.registerUser
)


router.post('/login', [
    body('email').isEmail().withMessage('invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
],userController.loginUser)

// router.get('/profile',authMiddleware.authUSer,  userController.getUserProfile);
// router.get('/logout',authMiddleware,userController.logoutUser)
module.exports = router
// Example POST route

// Define the POST route
// router.post('/register', async (req, res) => {
//     console.log('API hit');
//     res.status(200).json({ message: 'Register endpoint hit' });
// });


// module.exports = router

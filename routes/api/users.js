const express = require('express');
const router = express.Router();
const {check, validationResult} = require('express-validator/check');

// @route POST api/users
// @desc Register a new user
// @access Public
router.post('/', [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please provide a valid email').isEmail(),
    check('password', 'Please provide a pasword with minimal length of 6').isLength({min: 6})
],(req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    console.log(req.body);
    res.send('Users route')
});

module.exports = router;
const express = require('express');

const { registerUser, loginUser, findUser, getUsers } = require('../Controllers/userController');
const router = express.Router();

router.get('/register', registerUser);
router.post('/register', registerUser);

router.get('/login', loginUser);

router.post('/login', loginUser);
router.get('/find/:userId', findUser);

router.get('/', getUsers);

module.exports = router;

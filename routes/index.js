const express = require('express');
const router = express.Router();
const login = require('./login');
const privateuser = require('./privateuser');

router.post('/login', login.config, login.processing);
router.get('/privateuser', privateuser);

module.exports = router;

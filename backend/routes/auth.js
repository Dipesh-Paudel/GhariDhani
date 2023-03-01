const {Router} = require('express');
const {returnSignupPage, createUser, returnLoginPage, loginUser} = require('../controllers/authControllers');
const router = Router();

router.post('/register',createUser)
router.post('/login',loginUser)

module.exports = router;
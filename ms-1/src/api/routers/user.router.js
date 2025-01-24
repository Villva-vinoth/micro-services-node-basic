const router = require('express').Router();
const { createUsers, getUsers, getUserById } = require('../controllers/user.controller');

router.post('/createUser',createUsers);
router.get('/getUsers',getUsers);
router.get('/getUserById/:id',getUserById);

module.exports = router
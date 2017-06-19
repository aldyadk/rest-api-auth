const express = require('express');
const router = express.Router()
const usersController = require('../controllers/usersController');

router.get('/',usersController.findAll)

router.post('/signin',usersController.signin)

router.post('/',usersController.create)

router.put('/',usersController.update)

router.delete('/:id',usersController.delete)

module.exports = router;
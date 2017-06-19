const express = require('express');
const router = express.Router()
const memosController = require('../controllers/memosController');

router.get('/',memosController.findAll)

router.post('/',memosController.create)

router.put('/:id',memosController.update)

router.delete('/:id',memosController.delete)

module.exports = router;
const express = require('express');
const router = express.Router();

const magazineController = require('../controllers/magazine');

router.get('/', magazineController.getAll);

router.get('/:id', magazineController.getSingle);

module.exports = router;
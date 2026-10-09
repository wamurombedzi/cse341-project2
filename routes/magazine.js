const express = require('express');
const router = express.Router();

const magazineController = require('../controllers/magazine');

router.get('/', magazineController.getAll);

router.get('/:id', magazineController.getSingle);

router.post('/', magazineController.createMagazine);

router.put('/:id', magazineController.updateMagazine);

router.delete('/:id', magazineController.deleteMagazine);

module.exports = router;
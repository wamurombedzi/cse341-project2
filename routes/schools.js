const express = require('express');
const router = express.Router();

const schoolsController = require('../controllers/schools');

router.get('/', schoolsController.getAll);

router.get('/:id', schoolsController.getSingle);

router.post('/', schoolsController.createSchools);

router.put('/:id', schoolsController.updateSchools);

router.delete('/:id', schoolsController.deleteSchools);

module.exports = router;
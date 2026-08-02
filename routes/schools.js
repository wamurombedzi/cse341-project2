const express = require('express');
const router = express.Router();

const schoolsController = require('../controllers/schools');
const validate = require('../middleware/validate');

router.get('/', schoolsController.getAll);

router.get('/:id', schoolsController.getSingle);

router.post('/', validate.saveSchools, schoolsController.createSchools);

router.put('/:id', validate.saveSchools, schoolsController.updateSchools);

router.delete('/:id', schoolsController.deleteSchools);

module.exports = router;
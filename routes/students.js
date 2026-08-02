const express = require('express');
const router = express.Router();

const studentsController = require('../controllers/students');
const validate = require('../middleware/validate');

router.get('/', studentsController.getAll);

router.get('/:id', studentsController.getSingle);

router.post('/', validate.saveStudents, studentsController.createStudents);

router.put('/:id', validate.saveStudents, studentsController.updateStudents);

router.delete('/:id', studentsController.deleteStudents);

module.exports = router;
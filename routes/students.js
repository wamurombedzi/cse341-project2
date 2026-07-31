const express = require('express');
const router = express.Router();

const studentsController = require('../controllers/students');

router.get('/', studentsController.getAll);

router.get('/:id', studentsController.getSingle);

router.post('/', studentsController.createStudents);

router.put('/:id', studentsController.updateStudents);

router.delete('/:id', studentsController.deleteStudents);

module.exports = router;
const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  //#swagger.tags=['students]
  mongodb
    .getDatabase()
    .db('project2')
    .collection('students')
    .find()
    .toArray((err, lists) => {
      if (err) {
        res.status(400).json({message: err});
      }
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
};
 
 const getSingle = async (req, res) => {
   //#swagger.tags=['students']
   const schoolsId = new ObjectId(req.params.id)
   mongodb
     .getDatabase()
     .db('project2')
     .collection('students')
     .find({ _id: studentsId })
     .toArray((err, result) => {
        if (err) {
          res.status(400).json({message: err});
        }
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result[0]);
      });
 };
 

const createStudents = async (req, res) => {
  //#swagger.tags=['students]
  const Students = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    age: req.body.age,
    grade_level: req.body.grade_level,
    gpa: req.body.gpa,
    enrollment: req.body.enrollment,
    subjects: req.body.subjects
  };
  const response = await mongodb.getDatabase().db().collection('students').insertOne(students);
  if (response.acknowledged) {
    res.stautus(204).send();
 } else {
  res.status(500).json(response.error || 'Some error occurred while updating the students.');
 }
};

const updateStudents = async (req, res) => {
  //#swagger.tags=['students]
  const studentsId = new ObjectId(req.params.is);
  const students = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    age: req.body.age,
    grade_level: req.body.grade_level,
    gpa: req.body.gpa,
    enrollment: req.body.enrollment,
    subjects: req.body.subjects
  };
  const response = await mongodb.getDatabase().db().collection('students').replaceOne({_id: studentsId}, user);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
  res.status(500).json(response.error || 'Some error occurred while updating the students.');
 }
};

const deleteStudents = async (req, res) => {
  //#swagger.tags=['students]
  const studentsId = new ObjectId(req.params.is);
  const response = await mongodb.getDatabase().db('project2').collection('students').deleteOne({_id: studentsId});
  if (response.deletedCount > 0) {
    res.status(204).send();
 } else {
  res.status(500).json(response.error || 'Some error occurred while updating the students.');
 }
};

module.exports = {
  getAll,
  getSingle,
  createStudents,
  updateStudents,
  deleteStudents
};
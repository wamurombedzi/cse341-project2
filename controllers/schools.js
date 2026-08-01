const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
  //#swagger.tags=['schools']
  mongodb
    .getDatabase()
    .db('project2')
    .collection('schools')
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
  //#swagger.tags=['schools']
  const schoolsId = new ObjectId(req.params.id)
  mongodb
    .getDatabase()
    .db('project2')
    .collection('schools')
    .find({ _id: schoolsId })
    .toArray((err, result) => {
      if (err) {
        res.status(400).json({message: err});
      }
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(result[0]);
    });
};

const createSchools = async (req, res) => {
  //#swagger.tags=['schools']
  const schools = {
    school_name: req.body.school_name,
    address: req.body.address,
    established_year: req.body.established_year,
    type: req.body.type,
  };
  const response = await mongodb.getDatabase().db().collection('schools').insertOne(schools);
  if (response.acknowledged) {
    res.status(204).send();
  } else {
    res.status(500). json(response.error || "Some error occurred while adding the schools.");
  }
}

const updateSchools = async (req, res) => {
  //#swagger.tags=['schools']
  const schoolsId = new ObjectId(req.params.id);
  const schools = {
    school_name: req.body.school_name,
    address: req.body.address,
    established_year: req.body.established_year,
    type: req.body.type,
  };
  const response = await mongodb.getDatabase().db().collection('schools').replaceOne({ _id: schoolsId }, schools);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500). json(response.error || "Some error occurred while updating the schools.");
  }
}

const deleteSchools = async (req, res) => {
  //#swagger.tags=['schools']
  const schoolsId = new ObjectId(req.params.id);
  const response = await mongodb.getDatabase().db().collection('schools').deleteOne({ _id: schoolsId });
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500). json(response.error || "Some error occurred while deleting the schools.");
  }
}

module.exports = {
  getAll,
  getSingle,
  createSchools,
  updateSchools,
  deleteSchools 
}
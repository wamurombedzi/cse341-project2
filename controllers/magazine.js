const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db('project2').collection('magazine').find();
    result.toArray().then((magazine) => {
        res.setHeader('Contet-Type', 'application/json');
        res.status(200).json(magazine);
    });
};

const getSingle = async (req, res) => {
    const magazineId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db('project2').collection('magazine').find({_id: magazineId});
    result.toArray().then((magazine) => {
        res.setHeader('Contet-Type', 'application/json');
        res.status(200).json(magazine);
    });
};

module.exports = {
    getAll,
    getSingle
};
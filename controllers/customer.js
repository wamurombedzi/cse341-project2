const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db('project2').collection('customer').find();
    result.toArray().then((customer) => {
        res.setHeader('Contet-Type', 'application/json');
        res.status(200).json(customer);
    });
};

const getSingle = async (req, res) => {
    const customerId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db('project2').collection('customer').find({_id: customerId});
    result.toArray().then((customer) => {
        res.setHeader('Contet-Type', 'application/json');
        res.status(200).json(customer);
    });
};

module.exports = {
    getAll,
    getSingle
};
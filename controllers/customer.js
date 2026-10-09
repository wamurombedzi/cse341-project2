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

const createCustomer = async (req, res) => {
    //#swagger.tags=['customer']
    const customerId = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        subscriptionPlan: req.body.subscriptionPlan,
        joinedDate: req.body.joinedDate,
        magazineSubscriber: req.body.magazineSubscriber
    };
    const response = await mongodb.getDatabase().db().collection('customer').insertOne(customer);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500). json(response.error || "Some error occurred while adding the customer.");
    }
}

const updateCustomer = async (req, res) => {
    //#swagger.tags=['customer']
    const customerId = new ObjectId(req.params.id);
    const customer = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        subscriptionPlan: req.body.subscriptionPlan,
        joinedDate: req.body.joinedDate,
        magazineSubscriber: req.body.magazineSubscriber
    };
    const response = await mongodb.getDatabase().db().collection('customer').replaceOne({ _id: customerId }, customer);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500). json(response.error || "Some error occurred while updating the customer.");
    }
}

const deleteCustomer = async (req, res) => {
    //#swagger.tags=['customer']
    const customerId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('customer').deleteOne({ _id: customerId });
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500). json(response.error || "Some error occurred while deleting the customer.");
    }
}

module.exports = {
    getAll,
    getSingle,
    createCustomer,
    updateCustomer,
    deleteCustomer
};
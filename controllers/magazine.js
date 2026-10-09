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

const createMagazine = async (req, res) => {
    //#swagger.tags=['magazine']
    const magazineId = {
        title: req.body.title,
        publisher: req.body.publisher,
        genre: req.body.genre,
        price: req.body.price,
        releaseDate: req.body.releaseDate,
        availableCopies: req.body.availableCopies
    };
    const response = await mongodb.getDatabase().db('project2').collection('magazine').insertOne(magazineId);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500). json(response.error || "Some error occurred while adding the magazine.");
    }
}

const updateMagazine = async (req, res) => {
    //#swagger.tags=['magazine']
    const magazineId = new ObjectId(req.params.id);
    const magazine = {
        title: req.body.title,
        publisher: req.body.publisher,
        genre: req.body.genre,
        price: req.body.price,
        releaseDate: req.body.releaseDate,
        availableCopies: req.body.availableCopies
    };
    const response = await mongodb.getDatabase().db('project2').collection('magazine').replaceOne({ _id: magazineId }, magazine);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500). json(response.error || "Some error occurred while updating the magazine.");
    }
}

const deleteMagazine = async (req, res) => {
    //#swagger.tags=['magazine']
    const magazineId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db('project2').collection('magazine').deleteOne({ _id: magazineId });
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500). json(response.error || "Some error occurred while deleting the magazine.");
    }
}

module.exports = {
    getAll,
    getSingle,
    createMagazine,
    updateMagazine,
    deleteMagazine
};
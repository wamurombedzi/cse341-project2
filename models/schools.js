const mongoose = require('mongoose');

const schoolsSchema = new.mangoose.Schema({
school_name: { type: String, required: true },
address: { type: String, required: true, unique: true },
established_year: { type: Date, default: Date.now },
type: { type: string} ,// New field for hashed password
});


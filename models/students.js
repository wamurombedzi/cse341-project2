const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  first_mane: {type: String, required: true},
  last_name: {type: String, required: true},
  age: {type: Number, required: true},
  grade_level: {type: String, required: true},
  gpa: {type: Number required: true},
  erollment: {type: Boolean, required:true}
})


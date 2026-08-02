const validator = require('../helpers/validate');

const saveSchools = (req, res, next) => {
  const validationRule = {
    school_name: 'required|string',
    address: 'required|email',
    established_year: 'string',
    type: 'required|string',
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed' ,
        data: err
      });
    } else {
      next();
    }
  });
};

const saveStudents = (req, res, next) => {
  const validationRule = {
    first_name: 'required|string',
    last_name: 'required|string',
    age: 'string',
    grade_level: 'string',
    gpa: 'string',
    enrollment: 'string',
    sunjects: 'required | string',
  };
  validator(req.body, validationRule, {}, (err, status) => {
    if (!status) {
      res.status(412).send({
        success: false,
        message: 'Validation failed' ,
        data: err
      });
    } else {
      next();
    }
  });
};

module.exports = {
  saveSchools,
  saveStudents
};

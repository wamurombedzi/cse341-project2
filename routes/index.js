const router = require('express').Router();

router.get('/', (req, res) => { res.send('Hello World') });

router.use('/customer', require('./customer'));

router.use('/magazine', require('./magazine'));

module.exports = router;
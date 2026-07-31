const router = require('express').Router();

router.get('/', (req, res) => {
  //#swagger.tags=['Hello World'] 
  res.send('Hello World'); 
});

router.use('/schools', require('./schools'));

router.use('/students', require('./students'));

module.exports = router;
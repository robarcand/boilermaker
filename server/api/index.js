const router = require('express').Router();

// import routes here ( i.e. router.use('/puppies', require('./puppies')) )

router.use((req, res, next) => {
    const err = new Error('API route not found!');
    err.status = 404;
    next(err);
})

module.exports = router;
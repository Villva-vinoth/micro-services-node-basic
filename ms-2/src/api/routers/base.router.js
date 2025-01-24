const orderRouter = require('./order.router');
const router = require('express').Router(); 

router.use('/order',orderRouter);

module.exports = router
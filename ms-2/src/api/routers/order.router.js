const router = require('express').Router();
const { createorders, getorders, getorderById } = require('../controllers/order.controller');

router.post('/createOrder',createorders);
router.get('/getOrders',getorders);
router.get('/getOrderById/:order_id',getorderById);

module.exports = router
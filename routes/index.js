var express = require('express');
var router = express.Router();
var Razorpay=require("razorpay")

var instance = new Razorpay({
  key_id: 'rzp_test_dKW9ooB5jPjPF0',
  key_secret: 'AIXuCZ1R00MIHTSw2xs08EZA',
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/create/orderId', function(req, res, next) {
  
var options = {
  amount: 50000,  // amount in the smallest currency unit
  currency: "INR",
  receipt: "order_rcptid_11"
};
instance.orders.create(options, function(err, order) {
  
  console.log(order);
  res.send(order);
});
});

module.exports = router;

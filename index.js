var express = require('express');
var app = express();
var passport = require('passport');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.static('public'));
app.set('view engine', 'ejs');

const sequelize = require('./configs/sequelize');
const postRouter = require("./routes/post");
const homeRouter = require("./routes/home");
const bookRouter = require('./routes/book');
const orderRouter = require('./routes/order');
const deliveryRouter = require('./routes/delivery');
const paymentRouter = require('./routes/payment');
const transactionRouter = require('./routes/transaction');
const userRouter = require('./routes/user');

const Book = require('./models/book');
const Order = require('./models/order');
const Delivery = require('./models/delivery');
const Payment = require('./models/payment');
const Transaction = require('./models/transaction');
const User = require('./models/User');

app.use("/login", postRouter);
app.use("/", homeRouter);
app.use('/book', bookRouter);
app.use('/order', orderRouter);
app.use('/delivery', deliveryRouter);
app.use('/payment', paymentRouter);     
app.use('/transaction', transactionRouter);
app.use('/user', userRouter);

Order.belongsTo(Book);
Order.belongsTo(User);
Delivery.belongsTo(Order);
Payment.belongsTo(Delivery);
Transaction.belongsTo(Payment);

app.listen(3000, ()=>{
	console.log("server aktif");
	sequelize.sync();
});


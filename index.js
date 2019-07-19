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
const userRouter = require('./routes/user');
const orderRouter = require('./routes/order');
const deliveryRouter = require('./routes/delivery');

const Book = require('./models/book');
const User = require('./models/User');
Order = require('./models/order');
const Delivery = require('./models/delivery');

app.use("/login", postRouter);
app.use("/", homeRouter);
app.use('/book', bookRouter);
app.use('/user', userRouter);
app.use('/order', orderRouter);
app.use('/delivery', deliveryRouter);

Order.belongsTo(Book);
Order.belongsTo(User);
Delivery.belongsTo(Order);

app.listen(3000, ()=>{
	console.log("server aktif");
	sequelize.sync();
});


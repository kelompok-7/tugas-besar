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

const Book = require('./models/book');
const User = require('./models/User');

app.use("/login", postRouter);
app.use("/", homeRouter);
app.use('/book', bookRouter);
app.use('/user', userRouter);

Order.belongsTo(Book);
Order.belongsTo(User);

app.listen(3000, ()=>{
	console.log("server aktif");
	sequelize.sync();
});


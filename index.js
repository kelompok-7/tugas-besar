var express = require('express');
var app = express();
var passport = require('passport');

const postRouter = require("./routes/post");

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use("/", postRouter);

app.listen(3000, ()=>{
	console.log("server aktif");
});


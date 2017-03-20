var express = require('express');
var app = express();
//Lay cong ket noi 
var port = process.env.PORT||8080;
//Lay duong dan 
var path = require('path');
//chon template engine de hien thi ra views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const posts = [
	{
		id: 1, 
		author: 'john',
		title: 'templating with ejs', 
		body: 'blogspost number 1'
	}, 
	{
		id: 2, 
		author: 'Dark',
		title: 'express: starting from the botton', 
		body: 'blog sport number 2'
	},
	{
		id: 3, 
		author: "Thuc kate", 
		title: "Stream", 
		body: "blog sport number 3" 
	},
	{
		id: 4, 
		author: "Vi Van Thuc", 
		title: "Event", 
		body: "blog sport number 4"
	}
]

app.get('/', function (req, res){
	res.render('index', {posts:posts});
});

app.listen(port);
console.log('Example app listening on port '+port);
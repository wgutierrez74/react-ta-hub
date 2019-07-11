const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const bodyParser = require('body-parser');
const keys = require('./config/keys');

require('./models/User');
require('./models/Course');

const mongoURI = keys.mongoURI;
mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, { useMongoClient: true });

const app = express();

app.use(cors());
app.use(bodyParser.json());

require('./routes/authRoutes')(app);
require('./routes/dbRoutes')(app);
require('./routes/courseRoutes')(app);

app.get('/test', (req, res)=>{
	console.log("test");
	console.log(res.header);
	res.send("Ayyyyyy");
});

/*
app.post('/login', (req,res)=>{
	console.log(req.body);
	//Fetch user once login is complete
	res.send({
		id:1,
		type:"student"
	});
});

app.post('/logout', (req,res)=>{
	//Logout and end session
	console.log("Logged Out");
	res.send();
});
*/

const port = 5000;
app.listen(port, (err)=>{
	if(err){
		console.log("Error")
	}
	console.log("Online");
});
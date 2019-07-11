const passport = require('passport');
const mongoose = require('mongoose');

const Course = mongoose.model('Course');

module.exports = (app) =>{
	
	//Make sure user is logged in first

	app.get('/courses/all', async (req,res)=>{
		const courses = await Course.find();
		res.send(courses);
	});
}
const mongoose = require('mongoose');

const User = mongoose.model('User');
const Course = mongoose.model('Course');

module.exports = (app) =>{
	
	app.get('/db/createUsers', async (req, res) =>{
		for(let i = 0; i< 100; i++){
			const user = new User({
				username: String(i),
				password: String(i),
				firstName: String(i),
				lastName: String(1000-i),
				displayName: i+" "+(1000-i),
				coursesTaken:[],
				courseGrades:[],
				abilities: "Notha",
				gpa: 4.0,
				newCourses:[],
				type: "student", 
				email: "deez@nuts.com"
			});

			try{
				await user.save();
			} catch(err){
				console.log(err);
				res.send("error on user: "+i);
			}
		}
		res.send("Created 100 users");
	});

	app.get('/db/deleteUsers', async (req,res)=>{
		// Drop the 'foo' collection from the current database
		try{
			await User.collection.drop(); 
		} catch(err){
			console.log(err)
			res.send("Error dopping User collection");
		}
		res.send("Users deleted");

	});

	app.get('/db/createCourses', async(req,res)=>{
		let course = new Course({
			courseNumber:'COP3502',
			courseName: 'Programming Fundamentals 1',
			instructors:[],
			tas:[],
		});
		try{
			await course.save();
		}catch(err){
			console.log(err);
			res.send("error on user: "+course.courseNumber);
		}
		course = new Course({
			courseNumber:'COP3503',
			courseName: 'Programming Fundamentals 2',
			instructors:[],
			tas:[],
		});
		try{
			await course.save();
		}catch(err){
			console.log(err);
			res.send("error on user: "+course.courseNumber);
		}
		course = new Course({
			courseNumber:'COT3100',
			courseName: 'Application of Discrete Structures',
			instructors:[],
			tas:[],
		});
		try{
			await course.save();
		}catch(err){
			console.log(err);
			res.send("error on user: "+course.courseNumber);
		}
		course = new Course({
			courseNumber:'COP3530',
			courseName: 'Data Structures and Algorithms',
			instructors:[],
			tas:[],
		});
		try{
			await course.save();
		}catch(err){
			console.log(err);
			res.send("error on user: "+course.courseNumber);
		}
		course = new Course({
			courseNumber:'CDA3101',
			courseName: 'Intro to Computational Organization',
			instructors:[],
			tas:[],
		});
		try{
			await course.save();
		}catch(err){
			console.log(err);
			res.send("error on user: "+course.courseNumber);
		}
		course = new Course({
			courseNumber:'CEN3031',
			courseName: 'Intro to Software Engineering',
			instructors:[],
			tas:[],
		});
		try{
			await course.save();
		}catch(err){
			console.log(err);
			res.send("error on user: "+course.courseNumber);
		}
		course = new Course({
			courseNumber:'COT4501',
			courseName: 'Numerical Analysis',
			instructors:[],
			tas:[],
		});
		try{
			await course.save();
		}catch(err){
			console.log(err);
			res.send("error on user: "+course.courseNumber);
		}
		course = new Course({
			courseNumber:'COP4600',
			courseName: 'Operating Systems',
			instructors:[],
			tas:[],
		});
		try{
			await course.save();
		}catch(err){
			console.log(err);
			res.send("error on user: "+course.courseNumber);
		}
		course = new Course({
			courseNumber:'COP4007C',
			courseName: 'Computer Network Fundamentals',
			instructors:[],
			tas:[],
		});
		try{
			await course.save();
		}catch(err){
			console.log(err);
			res.send("error on user: "+course.courseNumber);
		}
		course = new Course({
			courseNumber:'CIS4301',
			courseName: 'Information & Database System Design and Development 1',
			instructors:[],
			tas:[],
		});
		try{
			await course.save();
		}catch(err){
			console.log(err);
			res.send("error on user: "+course.courseNumber);
		}
		course = new Course({
			courseNumber:'EEL3701C',
			courseName: 'Digital Logic',
			instructors:[],
			tas:[],
		});
		try{
			await course.save();
		}catch(err){
			console.log(err);
			res.send("error on user: "+course.courseNumber);
		}
		course = new Course({
			courseNumber:'CIS4914',
			courseName: 'Senior Project',
			instructors:[],
			tas:[],
		});
		try{
			await course.save();
		}catch(err){
			console.log(err);
			res.send("error on user: "+course.courseNumber);
		}

		res.send('Courses Created');

	});

	app.get('/db/deleteCourses', async (req, res)=>{
		try{
			await Course.collection.drop();
		}catch(err){
			console.log(err);
			res.send('Error dropping Course collection');
		}
	});
}
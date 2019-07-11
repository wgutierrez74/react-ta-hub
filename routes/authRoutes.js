const passport = require('passport');
const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = (app) =>{
	app.post('/user/login', async (req,res)=>{
		const { username } = req.body;
		try{
			const user = await User.findOne({username: username})
			console.log(user);
		res.send(user);
		}catch(err){
			console.log(err);
			res.send("err")
		}

		//Fetch user once after initializing session with passport
		/*res.send({
			id:1,
			type:"student"
		});
		*/
	});

	app.post('/user/logout', (req,res)=>{
		//Logout and end session
		//End passport session read....
		console.log("Logged Out");
		res.send();
	});

	app.post('/user/update', async (req,res)=>{
		console.log(req.body);

		const { username } = req.body;
		await User.findOneAndUpdate({username:username}, req.body);
	
		try{
			const user = await User.findOne({username: username});
			res.send(user);
		}catch(err){
			console.log(err);
			res.send('err');
		}
		
	});
}
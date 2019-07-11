const passport = require('passport');
const mongoose = require('mongoose');

const User = mongoose.model('User');

module.exports = (app) =>{
	app.post('/user/update', async (req,res)=>{
		const { username } = req.body;
		try{
			const user = await User.findOne({username: username})
			console.log(user);
		res.send(user);
		}catch(err){
			console.log(err);
			res.send("err")
		}


	});


}
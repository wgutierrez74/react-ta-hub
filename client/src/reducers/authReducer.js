const INITIAL_STATE = {
	isSignedIn: null,
	_id:null,
	type:null
}

export default ( state = INITIAL_STATE, action) =>{
	let newState = {};
	switch(action.type){
		case 'SIGN_IN':
			newState = {...state, isSignedIn:true, ...action.payload};
			break;
		case 'SIGN_OUT': 
			newState = {...INITIAL_STATE};
			break;
		case 'UPDATE_USER':
			newState = {...state, isSignedIn: true, ...action.payload};
			break;
		default:
			return state;
	};

	return newState;
};
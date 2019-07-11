

export default ( state = {}, action) =>{
	let newState = {};
	switch(action.type){
		case 'FETCH_COURSES':
			newState = {...state, ...action.payload};
			break;
		default:
			return state;
	};

	return newState;
};
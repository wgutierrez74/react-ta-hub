import history from '../history';
import users from '../apis/users';


export const login = (formValues) => async (dispatch) =>{
	console.log("Login Attempt");
	
	const response = await users.post('/user/login', formValues);
	
	const action =  {
		type: 'SIGN_IN',
		payload: response.data
	}
	dispatch(action);
	history.push(`/${response.data.type}/${response.data._id}`);
}

export const logout = () => async (dispatch) =>{
	console.log("Log out");

	//await users.post('/user/logout', id);

	dispatch({type:'SIGN_OUT'});

	history.push('/');
}  

export const fetchCourses = () => async (dispatch) =>{
	console.log('Fetching Courses');

	const response = await users.get('/courses/all');

	dispatch({type:'FETCH_COURSES', payload:response.data});
}

export const updateUser =(user) => async (dispatch) =>{
	const response = await users.post('/user/update', user);
	dispatch({type:'UPDATE_USER' , payload:response.data })
}



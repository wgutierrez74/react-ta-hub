import React from 'react';
import logo from '../style/logo.png'; 
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import { login, logout } from '../actions';

class HomePage extends React.Component{

	renderInput = (formProps) =>{
		return (
			<div className="field">
				<label style={{color:'white'}}>{formProps.label}</label>
				<input {...formProps.input} autoComplete='off'/>
			</div>
		);
	}

	login = (formValues) =>{		
		this.props.login(formValues);
	}

	render(){
		return(
			<div className='ui grid'>
				<div className='row'>
					<div className='two wide column' /> 
					<div className='twelve wide column'>
						<img src={logo}/>
					</div>
				</div>
				<div className='row'>
					<div className="four wide column"/>
					<div className="eight wide column">
						<form onSubmit={this.props.handleSubmit(this.login)} className="ui form">
							<Field name='username' component={this.renderInput} label='Enter your username'/>
							<Field name='password' component={this.renderInput} label='Enter your password'/>
							<button className='ui button' style={{backgroundColor:'#FA4616', color: "white"}}>
								Login
							</button>

						</form>
						<button className="ui button" onClick={()=>this.props.logout()}>Logout</button>
					</div>
				</div>
			</div>
		);
	}
}



const formWrapped = reduxForm({
	form: 'LoginForm'
})(HomePage);

export default connect(null, {
	login,
	logout
})(formWrapped)
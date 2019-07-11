import React from 'react';
import { connect } from 'react-redux';

import Redirect from './Redirect';
import NavigationBar from './NavigationBar';
import BigDummy from './BigDummy';
import Dummy from './Dummy';
import history from '../history';

import StudentProfile from './student/StudentProfile';
import EditStudentProfile from './student/EditStudentProfile';
import AddCourse from './student/AddCourse';


class Interface extends React.Component{

	renderUserPage(){
		if(!this.props.userId){
			return  <Redirect />;
		}
		let menu;
		let tabs;
		const accessLevel = this.props.match.url.split('/')[1];
		if(this.props.type === "student" && this.props.userId === this.props.match.params.id && accessLevel==="student"){
			if(this.props.userId === this.props.match.params.id){
				menu = ["Profile", "Edit Profile", "Add Courses", "Check Status"]
				tabs = [<StudentProfile />, <EditStudentProfile />, <AddCourse />, <EditStudentProfile />];
			}
		}
		else if(this.props.type === "faculty" && this.props.userId === this.props.match.params.id && accessLevel==="faculty"){
			console.log("Faccc");
			menu = ["Teach", "Search", "Upload", "Check Status"]
			tabs = [BigDummy, Dummy, BigDummy, Dummy];
		}
		else if(this.props.type === "admin" && this.props.userId === this.props.match.params.id && accessLevel==="admin"){
			menu = ["Administrate", "Search", "Upload", "Check Status"]
			tabs = [Dummy, BigDummy, Dummy, BigDummy];
		}
		else{
			return <Redirect />;
			//return <p>Permission Forbidden</p>;
		}
		return <NavigationBar id={this.props.userId} menu={menu} tabs={tabs}/>;
	}

	render(){
		return(
			<div>
				{this.renderUserPage()}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) =>{
	return {
		isSignedIn: state.auth.isSignedIn,
		type: state.auth.type,
		userId: state.auth._id
	}
}

export default connect(mapStateToProps)(Interface);
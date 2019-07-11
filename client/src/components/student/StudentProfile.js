import React from 'react';
import { connect } from 'react-redux';

class StudentProfile extends React.Component{

	renderClasses(){
		return this.props.user.coursesTaken.map((course, i)=>{
			return <li>{course}nbsp;{this.user.courseGrades[i]}</li>
		});
	}

	render(){
		return (
			<div>
				<h2>Profile:</h2>
				<div>Name: {this.props.user.displayName}</div>
				<div>Email: {this.props.user.email}</div>
				<div>GPA: {this.props.user.gpa}</div>
				<div>Abilities: {this.props.user.abilities}</div>
				<div>Name: {this.props.user.displayName}</div>
				<div>Previous Courses & Grades:</div>
				<div>
					<ul>
						{this.renderClasses()}
					</ul>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) =>{
	return {
		user: state.auth
	}
}

export default connect(mapStateToProps,{

})(StudentProfile);
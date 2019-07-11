import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

class EditStudentProfile extends React.Component{

	state ={
		coursesTaken:this.props.user.coursesTaken,
		courseGrades:this.props.user.courseGrades,
		newCourse:'',
		newCourseGrade:''
	}

	removeCourse = (course, index) =>{
		let courses = this.state.coursesTaken;
		let grades = this.state.courseGrades;
		courses.splice(index, 1);
		grades.splice(index, 1);
		this.setState({
			courseTaken:courses,
			courseGrades:grades
		});
	} 

	addCourse = (course, grade) =>{
		this.setState({
			coursesTaken:[...this.state.coursesTaken,course],
			courseGrades:[...this.state.courseGrades, grade]
		});
	}

	renderOldCourses =() =>{
		return this.state.coursesTaken.map((course, i)=>{
			return (
				<tr>
					<td key={course}>{course} {this.state.courseGrades[i]}</td>
					<td><button className='ui button primaty' onClick={()=>this.removeCourse(course,i)}>Remove</button></td>
				</tr>	
			);
		});
	}

	renderNewCourses =() =>{
		//Add onChange event to update state
		return(
			<React.Fragment>
				<label>Add previously taken course:</label>
				<input placeholder='ex. CEN3031' defaultValue={this.state.newCourse} onChange={(e) => this.setState({newCourse: e.target.value})}/>
				<label>Grade for course:</label>
				<input placeholder='ex. A' defaultValue={this.state.newCourseGrade} onChange={(e) => this.setState({newCourseGrade: e.target.value})}/>
				<button onClick={()=>this.addCourse(this.state.newCourse, this.state.newCourseGrade)} className='ui button primary'>Add</button>
			</React.Fragment>
		)
	}

	renderInput = (formProps) =>{
		return(
			<React.Fragment>
				<label>{formProps.label}</label>
				<input defaultValue={formProps.placeholder} />
			</React.Fragment>
		)
	}

	updateProfile = () =>{

	}

	render(){
		//CourseTaken and grades need a different component
		return (
			<div>
				<h2>Edit Profile:</h2>
				<form onSubmit={this.props.handleSubmit(this.updateProfile)} className="ui form">
					<Field name='firstName' component={this.renderInput} label='First Name:' placeholder={`${this.props.user.firstName}`}/>
					<Field name='lastName' component={this.renderInput} label='Last Name: ' placeholder={`${this.props.user.lastName}`}/>
					<Field name='email' component={this.renderInput} label='Email:' placeholder={`${this.props.user.email}`}/>
					<Field name='gpa' component={this.renderInput} label='GPA:' placeholder={`${this.props.user.gpa}`}/>
					<Field name='newCourses' component={this.renderNewCourses} label='Add previous courses' placeholder='ex. CEN3031'/>
	
					<div>
						<table>
							<thead>
							<tr>
								<th>Course:</th>
								<th>Remove:</th>
							</tr>
							</thead>
							<tbody>
							{this.renderOldCourses()}
							</tbody>
						</table>
					</div>

				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) =>{
	return {
		user: state.auth
	}
}

const formWrapped = reduxForm({
	form: 'EditStudentProfileForm'
})(EditStudentProfile);


export default connect(mapStateToProps,{

})(formWrapped);
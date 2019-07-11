import React from 'react';
import { connect } from 'react-redux';
import { fetchCourses, updateUser } from '../../actions'; 

class AddCourse extends React.Component{

	state = {
		selectedCourses:this.props.user.newCourses,
		filter:''
	}

	componentDidMount(){
		console.log(this.props.user);
		this.props.fetchCourses();
	}

	removeSelectedCourse(course){
		this.setState({selectedCourses: this.state.selectedCourses.filter(c=>c!=course)});
	}

	addToSelectedCourses(course){
		this.setState({selectedCourses: [...this.state.selectedCourses, course]});
	}

	saveSelectedCourses =() =>{
		let user = this.props.user;
		
		delete user.isSignedIn;
		user.newCourses = this.state.selectedCourses;
		console.log(user);
		this.props.updateUser(user);
	}

	renderSelectedCourses(){
		return this.state.selectedCourses.map((course, i)=>{
			return (
				<li key={course}>
					<b>{course}</b>&nbsp;
					<button className='ui button negative' onClick={()=>this.removeSelectedCourse(course,i)}>Remove</button>
				</li>
			);
		})
	}

	renderAllCourses(){
		let courses = Object.values(this.props.courses);
		courses = courses.filter(course=>course.courseNumber.toLowerCase().includes(this.state.filter.toLowerCase()));
		return courses.map((course, i)=>{
			return (
				<tr key={course.courseNumber}>
					<td>{course.courseNumber}</td>
					<td>{course.courseName}</td>
					<td>
						<button onClick={()=>this.addToSelectedCourses(course.courseNumber)} className='ui button primary'>Add</button>
					</td>
				</tr>
			);
		})
	}

	render(){
		return (
			<div className='ui grid'>
				<div className='row'>
					 <h2 >Select which courses you would like to become a TA for</h2><br />
					 <h3>You can select up to 4 courses</h3>
				</div>
				<div className='row'>
					<div className='six wide column'>
						<h3>Selected Courses:</h3>
						<ul>
							{this.renderSelectedCourses()}
						</ul>
						<div>
							<button onClick={this.saveSelectedCourses} className='ui button primary'>Save</button>
						</div>
					</div>
					<div className='ten wide column'>
						<h3>Add Course:</h3>
						<div className="ui input focus">
							<input onChange={(e)=>this.setState({filter:e.target.value})} />
						</div>
						<div className='course-list'> 
							<table>
								<thead>
									<tr>
										<th>Course Number</th>
										<th>Course Name</th>
										<th>Add Course</th>
									</tr>
								</thead>
								<tbody>
									{this.renderAllCourses()}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) =>{
	return {
		user: state.auth,
		courses: state.courses
	}
}

export default connect(mapStateToProps,{
	fetchCourses,
	updateUser
})(AddCourse);
import React from 'react';
import { connect } from 'react-redux';

import history from '../history';




class Redirect extends React.Component{

	componentDidMount(){
		setTimeout(()=>{
			if(this.props.isSignedIn){
				history.push(`/${this.props.type}/${this.props.userId}`)
			}else{
				history.push('/')
			}
		}, 2000)
	}

	render(){
		return(
			<div>
				Permission Forbidden...<br />
				Redirect to authorized page
			</div>
		);
	}

}

const mapStateToProps = (state, ownProps) =>{
	return {
		isSignedIn: state.auth.isSignedIn,
		type: state.auth.type,
		userId: state.auth.userId
	}
}

export default connect(mapStateToProps)(Redirect);
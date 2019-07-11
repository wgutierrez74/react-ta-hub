import React from 'react';
import { connect } from 'react-redux';

import { logout } from '../actions';

class NavigationBar extends React.Component{

	state = {selected: 0}

	renderMenu = () =>{
		 return this.props.menu.map((item, i)=>{
			let cName = "item "
			if(this.state.selected===i){
				cName+="active"
			}
		 	return <a onClick={()=>this.setState({selected:i})} key={i} className={cName}>{this.props.menu[i]}</a>
		 });
	}

	renderTab = () =>{
		return this.props.tabs[this.state.selected];
	}

	logout = () =>{
		//console.log(this.props.id);
		this.props.logout(this.props.id)
	}

	render(){
		return(
			<React.Fragment>
				<div className="ui pointing menu">
				  {this.renderMenu()}
				  <div className="right menu">
				    <div className="item">
				      <button onClick={this.logout} className="ui button negative">Logout</button>
				    </div>
				  </div>
				</div>
				<div className="ui segment">
					{this.renderTab()}
				</div>
			</React.Fragment>
		);
	}

}

export default connect(null, {
	logout
})(NavigationBar)

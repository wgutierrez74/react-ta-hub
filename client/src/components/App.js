import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import HomePage from './HomePage';
import Interface from './Interface';
import history from '../history';

const App = () =>{
	
	return (
		<div className="ui container">
			<Router history={history}>
				<Switch>
					<Route path="/" exact component={HomePage} />
					<Route path='/student/:id' exact component={Interface}/>
					<Route path='/faculty/:id' exact component={Interface}/>
					<Route path='/admin/:id' exact component={Interface}/>
				</Switch>
			</Router>
		</div>
	);
}


export default App;
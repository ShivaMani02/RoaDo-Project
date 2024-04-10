import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../Components/index';
import Desktop from '../Components/Desktop';
const RouterDOM = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/"><HomePage /></Route>
				<Route exact path="/desktop"><Desktop /></Route>
			</Switch>
		</Router>
	);
}
export default RouterDOM;
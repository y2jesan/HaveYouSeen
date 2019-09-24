import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Home from './components/Home';
import MostPopular from './components/MostPopular';
import UserProfile from './components/UserProfile';
import SeriesDetails from './components/SeriesDetails';
//TODO Web Template Studio: Add routes for your new pages here.
class App extends Component {
	render() {
		return (
			<React.Fragment>
				<NavBar />
				<Switch>
					<Redirect exact path="/" to="/Home" />
					<Route path="/Home" component={Home} />
					<Route path="/MostPopular" component={MostPopular} />
					<Route path="/UserProfile" component={UserProfile} />
					<Route path="/SeriesDetails" component={SeriesDetails} />
				</Switch>
				<Footer />
			</React.Fragment>
		);
	}
}

export default App;

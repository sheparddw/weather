import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Api from '../helpers/api';
import cloud from '../assets/cloud.svg';
import Settings from './Settings/Settings';
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			city: 'portland',
			apidata: false,
		}
	}

	componentDidMount() {
	}

	componentDidUpdate() {
		console.log(this.state.apidata)
	}

	// Get weather data via the openweather API.
	callApi() {
		const api = new Api();
		const headers = [];
		// Use the user's selection of apiKey and City.
		const { coordinates } = this.state;
		const url = `https://api.weather.gov/points/${coordinates}`

		return (
			api
				.get( url, headers )
				.then( ( data ) => {
					// If status is 200-299.
					if ( data.ok ) {
						return data.json().then( ( jsonData ) => 
							this.setState({ apidata: jsonData })
						);
					}
				})
		);
	}

	handleSettingsChange( childState ) {
		const { coordinates } = childState;
		return this.setState({ coordinates }, () => {
			this.refreshApi();
		})
	}

	refreshApi() {
		// Avoid duplicate requests being made by clearing previous calls.
		clearTimeout( this.check );

		return ( this.check = setTimeout( () => {
			this.callApi();
		}, 600 ) );
	}

	app() {
		const weather = this.state.apidata;
		// Only shows if weather is available anyway.
		const report = `It's ${weather?.main?.temp} degrees in ${weather?.name}!`;

		return (
			<div className="App">
				<Link to="/settings">Settings</Link>
				<header className="App-header">
				<img src={cloud} className="App-logo" alt="logo" />
					
				</header>
				<div className="input">
					<label htmlFor="city">City</label>
				</div>
				{ weather && (
					<div className="report">{ report }</div>
				)}
				<div className="attributions">Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
			</div>
		);
	}

	render() {
		return (
			<Router>
				<Switch>
					<Route path="/settings">
						<Settings onSettingsChange={ () => this.onSettingsChange() }/>
					</Route>
					<Route path="/">
						{ this.app() }
					</Route>
        		</Switch>
			</Router>
		)
	}
}

export default App;

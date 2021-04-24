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

		// Use localStorage data if available. Otherwise default to Portland.
		const coordinates = window.localStorage.getItem('coordinates') || '45.5051,-122.6750';

		this.state = {
			coordinates,
			overviewData: false,
			forecastData: false,
		}
	}

	componentDidMount() {
		this.getForecast();
	}

	componentDidUpdate() {
	}

	getForecast() {
		// Use the user's coordinates from the Settings page if available.
		const { coordinates } = this.state;
		// Gets the overview api data then runs another call for the forecast.
		this.callApi(`https://api.weather.gov/points/${coordinates}`, 'overviewData').then(
			data => this.callApi(this.state.overviewData?.properties?.forecast, 'forecastData')
		);
	}

	// Get weather data via the openweather API.
	callApi( url, stateItemName ) {
		const api = new Api();
		const headers = [];
		return (
			api
				.get( url, headers )
				.then( ( data ) => {
					// If status is 200-299.
					if ( data.ok ) {
						return data.json().then( ( jsonData ) => 
							this.setState({ [stateItemName]: jsonData })
						);
					}
				})
		);
	}

	// Whenever settings change, update the API data.
	handleSettingsChange( childState ) {
		const coordinates = childState?.coordinates;
		// Make sure the value is valid.
		if ( coordinates ) {
			return this.setState({ coordinates }, () => {
				this.getForecast();
			})
		}
	}

	// The forecast UI.
	app() {
		const overview = this.state.overviewData;
		const city = overview?.properties?.relativeLocation?.properties?.city;
		const weather = this.state.forecastData?.properties?.periods?.[0];
		// Only shows if weather is available anyway.
		const report = `${weather?.name}: ${weather?.detailedForecast}`;
		const image = weather?.icon;

		return (
			<div className="App">
				<Link to="/settings">Settings</Link>
				<header className="App-header">
				{ image && (
					<img src={image} className="icon" alt="logo" />
				)}
				</header>
				{ city && (
					<div className="city">
						<h2>{city}</h2>
					</div>
				)}
				{ weather && (
					<div className="report">
						{ report }
					</div>
				)}
			</div>
		);
	}

	render() {
		let basename = '/weather';

		return (
			<Router basename={ basename }>
				<Switch>
					<Route path="/settings">
						<Settings
							handleSettingsChange={ this.handleSettingsChange.bind(this) }
							coordinates={this.state.coordinates}
						/>
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

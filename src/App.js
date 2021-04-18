import React, { Component } from 'react';

import Api from './helpers/api';
import cloud from './assets/cloud.svg';
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

	// Get weather data via the openweather API.
	callApi() {
		const api = new Api();
		const headers = [];
		// Use the user's selection of apiKey and City.
		const { city, apiKey } = this.state;
		const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`

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

	handleChange(e) {
		// Avoid duplicate requests being made by clearing previous calls.
		clearTimeout( this.check );

		return ( this.check = setTimeout( () => {
			this.callApi();
		}, 600 ) );
	}

	render() {
		const weather = this.state.apidata;
		// Only shows if weather is available anyway.
		const report = `It's ${weather?.main?.temp} degrees in ${weather?.name}!`;

		return (
			<div className="App">
				<header className="App-header">
				<img src={cloud} className="App-logo" alt="logo" />
					
				</header>
				<div className="input">
					<label htmlFor="apikey">API Key</label>
					<input
						id="apikey"
						onChange={
							(e) => {
								const apiKey = e.target.value;
								this.setState({ apiKey }, () => {
									this.handleChange(e);
								})
							}
						}
					/>
				</div>
				<div className="input">
					<label htmlFor="city">City</label>
					<input
						id="city"
						onChange={
							(e) => {
								const city = e.target.value;
								this.setState({ city }, () => {
									this.handleChange(e);
								})
							}
						}
					/>
				</div>
				{ weather && (
					<div className="report">{ report }</div>
				)}
				<div className="attributions">Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
			</div>
		);
	}
}

export default App;

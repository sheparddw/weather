import React, { Component } from 'react';
import { Link } from "react-router-dom";

import './Settings.css';

class Settings extends Component {
	constructor(props) {
		super(props);

		this.state = {
			coordinates: this.props.coordinates,
		}
	}

	componentDidMount() {
	}

	handleChange(coordinates) {
		this.setState({coordinates}, () => {
			this.saveCoordinates();

			const passedState = {
				coordinates,
			}
			this.props.handleSettingsChange(passedState);
		})
	}

	// Saves to localStorage so persists beyond the session.
	saveCoordinates() {
		window.localStorage.setItem('coordinates', this.state.coordinates);
	}

	render() {
		const { coordinates } = this.state;

		return (
			<div className="Settings">
				<Link to="/">{'<-'}</Link>
				<h1>Settings</h1>
				<div>
					<button
						onClick={() => {
							const coordinates = '45.5051,-122.6750';
							this.setState({ coordinates }, () => {
								this.handleChange(coordinates);
							})
						}}
					>Use Default</button>

					<h2>Coordinates:</h2>
					Todo: add a map here.

					<input
						id="coordinates"
						value={coordinates}
						onChange={
							(e) => {
								const coordinates = e.target.value;
								this.setState({ coordinates }, () => {
									this.handleChange(coordinates);
								})
							}
						}
					/>
				</div>
			</div>
		);
	}
}

export default Settings;

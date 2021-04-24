import React, { Component } from 'react';

import './Settings.css';

class Settings extends Component {
	constructor(props) {
		super(props);

		this.state = {
			coordinates: '',
		}
	}

	componentDidMount() {
	}

	handleChange(e) {
	}

	render() {
		const { coordinates } = this.state;

		return (
			<div className="Settings">
				<h1>Settings</h1>
				<div>
					<h2>Coordinates:</h2>
				</div>
			</div>
		);
	}
}

export default Settings;

import React, { Component } from 'react';
import ViewBox from './ViewBox.jsx';

export default class TitleScreen extends Component {
	constructor (params) {
		super(params);
	}

	playTitleSequence () {

	}

	render () {
		return (
			<ViewBox ref={(e) => window.view = e}>
				<div className={this.class_name + " title_screen"}></div>
			</ViewBox>
		);
	}
}

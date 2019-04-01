import React, { Component } from 'react';

const direction_class_names = ["to_top", "to_right", "to_bottom", "to_left"];
const transitions = {
	"slide": 0,
	"fade": 1,
	"iris": 3
};

export default class ViewBox extends Component {
	fadeIn () {
		this.dom_element.classList.remove("fade");
		this.dom_element.classList.add("faded_out");
		setTimeout(() => this.dom_element.classList.add("fade"), 10);
		setTimeout(() => this.dom_element.classList.remove("faded_out"), 20);
	}

	fadeOut () {
		this.setState({"transition": transitions.fade});
		this.dom_element.classList.add("fade");
		this.dom_element.classList.add("faded_out");
	}

	irisIn () {
		this.setState({"transition": transitions.iris});
		this.dom_element.classList.remove("iris");
		this.dom_element.classList.add("iris_out");
		setTimeout(() => this.dom_element.classList.add("iris"), 10);
		setTimeout(() => this.dom_element.classList.remove("iris_out"), 20);
	}

	irisOut () {
		this.setState({"transition": transitions.iris});
		this.dom_element.classList.add("iris");
		this.dom_element.classList.add("iris_out");
	}

	slideIn (direction = this.state.direction) {
		this.setState({"transition": transitions.slide});
		let direction_class_name = direction_class_names[direction];
		this.dom_element.classList.remove("slide");
		this.dom_element.classList.add(direction_class_name);
		setTimeout(() => this.dom_element.classList.add("slide"), 10);
		setTimeout(() => this.dom_element.classList.remove(direction_class_name), 20);
	}
	
	slideOut (direction = this.state.direction) {
		this.setState({
			"direction": direction,
			"transition": transitions.slide
		});
		let direction_class_name = direction_class_names[direction];
		this.dom_element.classList.add("slide");
		this.dom_element.classList.add(direction_class_name);
	}
	
	prepTransition (transition_type) {
		if (this.state.transition != transition_type) {

		}
	}
	
	goBack () {}
	
	goForward () {}
	
	render () {
		return (
			<div className="view_box" ref={(e) => this.dom_element = e}>
			{this.props.children}
			</div>
		);
	}
}

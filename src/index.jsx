import React from 'react';

class Button extends React.Component {
	constructor(props) {
		super(props);

		let color, backgroundColor, borderColor, type = ''; // initialize variables

		// if full button

		if(!this.props.full) {
			color = this.props.color ? this.props.color : '#333'
			backgroundColor = '#fff';
			borderColor = color;
			type = 'hollow';
		} else {
			// if not full button
			color = '#fff'
			backgroundColor = this.props.color ? this.props.color : '#333';
			borderColor = color;
			type = 'full';
		}

		// initilize state

		this.state = {
			style: {
				color,
				backgroundColor,
				borderColor
			},
			normalStyle : {},
			onHoverdStyle : {},
			type,
			hovered: false
		}

		// bind functions
		this._onClick = this._onClick.bind(this);
		this._toggleHover = this._toggleHover.bind(this);
	}

	componentDidMount() {
		// update onHoverdStyle

		let onHoverdStyle = this._invertColors(this.state.type, this.state.style);

		this.setState({
			onHoverdStyle
		})

		// preserve normal style

		let normalStyle = this.state.style;

		this.setState({
			normalStyle
		});
	}

	// onclick function

	_onClick () {

		// if parent onClick function exist
		if(this.props.onClick) {
			this.props.onClick(); // call parent onclick function
		}
	}

	_toggleHover() {

		let hovered = this.state.hovered;
		let style = {};

		if(hovered) {
			style = this.state.normalStyle;
		} else {
			style = this.state.onHoverdStyle;
		}

		// toggle hovered state
		hovered = !hovered;
		this.setState({
			hovered,
			style
		});
	}

	_invertColors(type, style) {
		let newStyle = {};
		switch(type){
			case 'full':
				newStyle.color = style.backgroundColor;
				newStyle.borderColor = style.backgroundColor;
				newStyle.backgroundColor = style.color;
				break;
			case 'hollow':
				newStyle.color = style.backgroundColor;
				newStyle.borderColor = style.backgroundColor;
				newStyle.backgroundColor = style.color;
				break;
			default:
				newStyle = style;
				break;
		}
		return newStyle;
	}

	render() {

		let style = {};
		
		// if button is round
		if(this.props.round) {
			style = Object.assign({}, this.state.style, styles.round); // inject round style
		}

		return(
			<button 
				style={Object.assign({}, styles.normal, styles.padded, style, this.props.style)}
				onClick={this._onClick}
				onMouseOver={this._toggleHover}
				onMouseOut={this._toggleHover}>
				{this.props.children}
			</button>
		);
	}
}

let styles = {
	normal: {
		backgroundColor: 'transparent',
		border: '2px solid',
		cursor: 'pointer',
		fontSize: '20px'
	},
	padded: {
		paddingLeft: '25px',
		paddingRight: '25px',
		paddingTop: '5px',
		paddingBottom: '5px'
	},
	round: {
		borderRadius: '30px'
	}
}

export default Button;
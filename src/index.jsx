import React from 'react';

class Button extends React.Component {
	constructor(props) {
		super(props);

		let color, backgroundColor, borderColor = ''; // initialize variables

		// if full button

		if(!this.props.full) {
			color = this.props.color ? this.props.color : '#333'
			backgroundColor = 'transparent';
			borderColor = color;
		} else {
			// if not full button
			color = '#fff'
			backgroundColor = this.props.color ? this.props.color : '#333';
			borderColor = color;
		}

		// initilize state

		this.state = {
			style: {
				color: color,
				backgroundColor: backgroundColor,
				borderColor: borderColor
			}
		}
	}

	componentDidMount() {
		// if button is round
		if(this.props.round) {
			let style = Object.assign({}, this.state.style, styles.round); // inject round style
			this.setState({
				style
			});
		}
	}

	render() {

		return(
			<button style={Object.assign({}, styles.normal, styles.padded, this.state.style, this.props.style)}>
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
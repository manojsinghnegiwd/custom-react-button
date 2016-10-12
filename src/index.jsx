import React from 'react';

class Button extends React.Component {
	constructor(props) {
		super(props);

		let color, backgroundColor, borderColor = '';

		if(!this.props.full) {
			color = this.props.color ? this.props.color : '#333'
			backgroundColor = 'transparent';
			borderColor = color;
		} else {
			color = '#fff'
			backgroundColor = this.props.color ? this.props.color : '#333';
			borderColor = color;
		}

		this.state = {
			style: {
				color: color,
				backgroundColor: backgroundColor,
				borderColor: borderColor
			}
		}
	}

	componentDidMount() {

	}

	render() {
		return(
			<button style={Object.assign(styles.normal, styles.padded, this.state.style)}>
				Button
			</button>
		);
	}
}

var styles = {
	normal: {
		backgroundColor: 'transparent',
		border: '2px solid',
		cursor: 'pointer'
	},
	padded: {
		paddingLeft: '15px',
		paddingRight: '15px'
	}
}

export default Button;
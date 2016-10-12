import React from 'react';

class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			style: {
				color:'#333',
				backgroundColor: 'transparent',
				borderColor: '#333'
			}
		}
	}

	// componentWillReceiveProps(nextProps) {
	// 	console.log(nextProps);     
	// }

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
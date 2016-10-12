import React from 'react';

class Button extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<button style={Object.assign(styles.normal, styles.padded)}>
				Button
			</button>
		);
	}
}

var styles = {
	normal: {
		backgroundColor: 'transparent',
		color: '#333',
		border: '2px solid #333',
		cursor: 'pointer'
	},
	padded: {
		paddingLeft: '15px',
		paddingRight: '15px'
	}
}

export default Button;
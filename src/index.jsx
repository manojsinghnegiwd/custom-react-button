import React from 'react';

class Button extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
			<button style={styles.normal}>
				Button
			</button>
		);
	}
}

var styles = {
	normal: {
		backgroundColor: 'transparent',
		color: '#333',
		border: '2px solid #333'
	}
}

export default Button;
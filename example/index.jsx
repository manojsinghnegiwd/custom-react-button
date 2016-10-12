import React from 'react';
import ReacDOM from 'react-dom';
import Button from './simple-react-button';

class App extends React.Component {
	render() {

		const props = {
			color: '#9b59b6',
			full: 'true',
			style: {
				fontSize: '30px'
			}
		}

		return (
			<Button {...props} />
		)
	}
}

ReacDOM.render(
	<App />,
	document.getElementById('app')
);
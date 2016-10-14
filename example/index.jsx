import React from 'react';
import ReacDOM from 'react-dom';
import Button from './custom-react-button';

class App extends React.Component {
	render() {

		const props = {
			color: '#9b59b6',
			full: true,
			round: true,
			style: {
				fontSize: '30px'
			}
		}

		return (
			<Button {...props}>
				Button
			</Button>
		)
	}
}

ReacDOM.render(
	<App />,
	document.getElementById('app')
);
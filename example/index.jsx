import React from 'react';
import ReacDOM from 'react-dom';
import Button from './simple-react-button';

class App extends React.Component {
	render() {
		return (
			<Button />
		)
	}
}

ReacDOM.render(
	<App />,
	document.getElementById('app')
);
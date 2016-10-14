import React from 'react';
import ReacDOM from 'react-dom';
import Button from './custom-react-button';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			text: 'Button'
		};
		this._onClick = this._onClick.bind(this);
	}

	_onClick () {
		let text = 'Clicked';
		this.setState({
			text
		});
	}

	render() {

		const props = {
			color: '#9b59b6',
			full: true,
			round: true,
			onClick: this._onClick,
			style: {
				fontSize: '30px'
			}
		}

		return (
			<Button {...props}>
				{this.state.text}
			</Button>
		)
	}
}

ReacDOM.render(
	<App />,
	document.getElementById('app')
);
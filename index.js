'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$Component) {
	_inherits(Button, _React$Component);

	function Button(props) {
		_classCallCheck(this, Button);

		var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

		var color = void 0,
		    backgroundColor = void 0,
		    borderColor = ''; // initialize variables

		// if full button

		if (!_this.props.full) {
			color = _this.props.color ? _this.props.color : '#333';
			backgroundColor = 'transparent';
			borderColor = color;
		} else {
			// if not full button
			color = '#fff';
			backgroundColor = _this.props.color ? _this.props.color : '#333';
			borderColor = color;
		}

		// initilize state

		_this.state = {
			style: {
				color: color,
				backgroundColor: backgroundColor,
				borderColor: borderColor
			}
		};
		return _this;
	}

	_createClass(Button, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			// if button is round
			if (this.props.round) {
				var style = Object.assign({}, this.state.style, styles.round); // inject round style
				this.setState({
					style: style
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {

			return _react2.default.createElement(
				'button',
				{ style: Object.assign({}, styles.normal, styles.padded, this.state.style, this.props.style) },
				this.props.children
			);
		}
	}]);

	return Button;
}(_react2.default.Component);

var styles = {
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
};

exports.default = Button;

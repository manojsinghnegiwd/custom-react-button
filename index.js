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
		    borderColor = void 0,
		    type = ''; // initialize variables

		// if full button

		if (!_this.props.full) {
			color = _this.props.color ? _this.props.color : '#333';
			backgroundColor = '#fff';
			borderColor = color;
			type = 'hollow';
		} else {
			// if not full button
			color = '#fff';
			backgroundColor = _this.props.color ? _this.props.color : '#333';
			borderColor = color;
			type = 'full';
		}

		// initilize state

		_this.state = {
			style: {
				color: color,
				backgroundColor: backgroundColor,
				borderColor: borderColor
			},
			normalStyle: {},
			onHoverdStyle: {},
			type: type,
			hovered: false
		};

		// bind functions
		_this._onClick = _this._onClick.bind(_this);
		_this._toggleHover = _this._toggleHover.bind(_this);
		return _this;
	}

	_createClass(Button, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			// update onHoverdStyle

			var onHoverdStyle = this._invertColors(this.state.type, this.state.style);

			this.setState({
				onHoverdStyle: onHoverdStyle
			});

			// preserve normal style

			var normalStyle = this.state.style;

			this.setState({
				normalStyle: normalStyle
			});
		}

		// onclick function

	}, {
		key: '_onClick',
		value: function _onClick() {

			// if parent onClick function exist
			if (this.props.onClick) {
				this.props.onClick(); // call parent onclick function
			}
		}
	}, {
		key: '_toggleHover',
		value: function _toggleHover() {

			var hovered = this.state.hovered;
			var style = {};

			if (hovered) {
				style = this.state.normalStyle;
			} else {
				style = this.state.onHoverdStyle;
			}

			// toggle hovered state
			hovered = !hovered;
			this.setState({
				hovered: hovered,
				style: style
			});
		}
	}, {
		key: '_invertColors',
		value: function _invertColors(type, style) {
			var newStyle = {};
			switch (type) {
				case 'full':
					newStyle.color = style.backgroundColor;
					newStyle.borderColor = style.backgroundColor;
					newStyle.backgroundColor = style.color;
					break;
				case 'hollow':
					newStyle.color = style.backgroundColor;
					newStyle.borderColor = style.backgroundColor;
					newStyle.backgroundColor = style.color;
					break;
				default:
					newStyle = style;
					break;
			}
			return newStyle;
		}
	}, {
		key: 'render',
		value: function render() {

			var style = {};

			// if button is round
			if (this.props.round) {
				style = Object.assign({}, this.state.style, styles.round); // inject round style
			}

			return _react2.default.createElement(
				'button',
				{
					style: Object.assign({}, styles.normal, styles.padded, style, this.props.style),
					onClick: this._onClick,
					onMouseOver: this._toggleHover,
					onMouseOut: this._toggleHover },
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

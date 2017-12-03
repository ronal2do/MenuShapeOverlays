'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

require('./menu.css');

var _ShapeOverlays = require('./ShapeOverlays');

var _ShapeOverlays2 = _interopRequireDefault(_ShapeOverlays);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withMenu = function withMenu(props) {
  return function (WrappedComponent) {

    return function (_React$Component) {
      _inherits(_class, _React$Component);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
      }

      _createClass(_class, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          var node = _reactDom2.default.findDOMNode(this);

          var elmHamburger = node.querySelector('.hamburger');
          var gNavItems = node.querySelectorAll('.global-menu__item');
          var elmOverlay = node.querySelector('.shape-overlays');
          var overlay = new _ShapeOverlays2.default(elmOverlay);
          var naviItems = Array.from(node.querySelectorAll('.global-menu__item'));

          naviItems.forEach(function (link) {
            return link.addEventListener('click', function (ev) {
              ev.preventDefault();

              overlay.toggle();
              if (overlay.isOpened === true) {
                elmHamburger.classList.add('is-opened-navi');
                for (var i = 0; i < gNavItems.length; i++) {
                  gNavItems[i].classList.add('is-opened');
                }
              } else {
                elmHamburger.classList.remove('is-opened-navi');
                for (var _i = 0; _i < gNavItems.length; _i++) {
                  gNavItems[_i].classList.remove('is-opened');
                }
              }
            });
          });

          elmHamburger.addEventListener('click', function () {
            if (overlay.isAnimating) {
              return false;
            }
            overlay.toggle();
            if (overlay.isOpened === true) {
              elmHamburger.classList.add('is-opened-navi');
              for (var i = 0; i < gNavItems.length; i++) {
                gNavItems[i].classList.add('is-opened');
              }
            } else {
              elmHamburger.classList.remove('is-opened-navi');
              for (var _i2 = 0; _i2 < gNavItems.length; _i2++) {
                gNavItems[_i2].classList.remove('is-opened');
              }
            }
          });
        }
      }, {
        key: 'render',
        value: function render() {
          var items = props.items;

          return _react2.default.createElement(
            'div',
            { className: 'new-menu' },
            _react2.default.createElement(
              'div',
              { className: 'content--new-menu' },
              _react2.default.createElement(
                'div',
                { className: 'hamburger hamburger--new-menu js-hover' },
                _react2.default.createElement(
                  'div',
                  { className: 'hamburger__line hamburger__line--01' },
                  _react2.default.createElement('div', { className: 'hamburger__line-in hamburger__line-in--01' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'hamburger__line hamburger__line--02' },
                  _react2.default.createElement('div', { className: 'hamburger__line-in hamburger__line-in--02' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'hamburger__line hamburger__line--03' },
                  _react2.default.createElement('div', { className: 'hamburger__line-in hamburger__line-in--03' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'hamburger__line hamburger__line--cross01' },
                  _react2.default.createElement('div', { className: 'hamburger__line-in hamburger__line-in--cross01' })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'hamburger__line hamburger__line--cross02' },
                  _react2.default.createElement('div', { className: 'hamburger__line-in hamburger__line-in--cross02' })
                )
              ),
              _react2.default.createElement(WrappedComponent, this.props),
              _react2.default.createElement(
                'div',
                { className: 'global-menu' },
                _react2.default.createElement(
                  'div',
                  { className: 'global-menu__wrap' },
                  items.map(function (item, i) {
                    return _react2.default.createElement(
                      'a',
                      { key: i,
                        className: 'global-menu__item global-menu__item--new-menu',
                        href: item.link },
                      item.label
                    );
                  })
                )
              ),
              _react2.default.createElement(
                'svg',
                { ref: 'test', className: 'shape-overlays', viewBox: '0 0 100 100', preserveAspectRatio: 'none' },
                _react2.default.createElement('path', { className: 'shape-overlays__path' }),
                _react2.default.createElement('path', { className: 'shape-overlays__path' }),
                _react2.default.createElement('path', { className: 'shape-overlays__path' })
              )
            )
          );
        }
      }]);

      return _class;
    }(_react2.default.Component);
  };
};

exports.default = withMenu;
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _Menu = require('../Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MENU_ITEMS = [{
  id: 0,
  label: 'Home',
  link: '/none'
}, {
  id: 2,
  label: 'News',
  link: '/none'
}, {
  id: 3,
  label: 'About',
  link: '/none'
}, {
  id: 4,
  label: 'Contact',
  link: '/none'
}];

var App = (0, _Menu2.default)({ items: MENU_ITEMS })(function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'p',
      null,
      'Hi there'
    )
  );
});

(0, _react3.storiesOf)('Menu', module).add('default', function () {
  return _react2.default.createElement(App, null);
});
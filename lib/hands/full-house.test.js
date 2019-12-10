"use strict";

var _fullHouse = _interopRequireDefault(require("./full-house"));

var _handParser = _interopRequireDefault(require("../handParser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Full House: Negative Identification', function () {
  expect((0, _fullHouse["default"])((0, _handParser["default"])('3D 3H 7C 2D AS'))).toBe(false);
});
test('Full House: Positive Identification', function () {
  expect((0, _fullHouse["default"])((0, _handParser["default"])('3D 2S 2D 3H 2C'))).toBe(true);
  expect((0, _fullHouse["default"])((0, _handParser["default"])('2S 2D 3D 3H 2C'))).toBe(true);
  expect((0, _fullHouse["default"])((0, _handParser["default"])('2S 2D 2C 3D 3H'))).toBe(true);
});
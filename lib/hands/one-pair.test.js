"use strict";

var _onePair = _interopRequireDefault(require("./one-pair"));

var _handParser = _interopRequireDefault(require("../handParser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('One Pair: Negative Identification', function () {
  expect((0, _onePair["default"])((0, _handParser["default"])('3D 5H 7C 2D AS'))).toBe(false);
});
test('One Pair: Positive Identification', function () {
  expect((0, _onePair["default"])((0, _handParser["default"])('3D 3H 2S AD 6S'))).toBe(true);
  expect((0, _onePair["default"])((0, _handParser["default"])('3D 2S AD 3H 6S'))).toBe(true);
  expect((0, _onePair["default"])((0, _handParser["default"])('3D 2S AD 6S 3H'))).toBe(true);
});
"use strict";

var _threeOfAKind = _interopRequireDefault(require("./three-of-a-kind"));

var _handParser = _interopRequireDefault(require("../handParser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Three of a kind: Negative Identification', function () {
  expect((0, _threeOfAKind["default"])((0, _handParser["default"])('3D 3H 7C 2D AS'))).toBe(false);
});
test('Three of a kind: Positive Identification', function () {
  expect((0, _threeOfAKind["default"])((0, _handParser["default"])('3D 3H 3S AD 2S'))).toBe(true);
  expect((0, _threeOfAKind["default"])((0, _handParser["default"])('3D 3S AD 3H 2S'))).toBe(true);
  expect((0, _threeOfAKind["default"])((0, _handParser["default"])('3D AD 3H 2S 3S'))).toBe(true);
});
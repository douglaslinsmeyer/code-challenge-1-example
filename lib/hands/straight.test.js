"use strict";

var _straight = _interopRequireDefault(require("./straight"));

var _handParser = require("../handParser");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Test that straight hand parser recognizes when a hand is NOT a straight.', function () {
  expect((0, _straight["default"])((0, _handParser.parseStringHand)('2H 3D 8S TC AS'))).toBe(false);
});
test('Test identification of straight.', function () {
  expect((0, _straight["default"])((0, _handParser.parseStringHand)('2H 3H 4H 5H 6H'))).toBe(true);
  expect((0, _straight["default"])((0, _handParser.parseStringHand)('2H 3C 4H 5S 6D'))).toBe(true);
});
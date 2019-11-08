"use strict";

var _maps = require("../maps");

var _straight = _interopRequireDefault(require("./straight"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Test that straight hand parser recognizes when a hand is NOT a straight.', function () {
  expect((0, _straight["default"])(_maps.hands.highCard)).toBe(false);
});
test('Test identification of straight.', function () {
  expect((0, _straight["default"])(_maps.hands.straight)).toBe(true);
});
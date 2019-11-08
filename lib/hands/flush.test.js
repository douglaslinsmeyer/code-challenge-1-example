"use strict";

var _maps = require("../maps");

var _flush = _interopRequireDefault(require("./flush"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Test that flush recognizes when a hand is NOT a flush.', function () {
  expect((0, _flush["default"])(_maps.hands.highCard)).toBe(false);
});
test('Test identification of flush.', function () {
  expect((0, _flush["default"])(_maps.hands.flush)).toBe(true);
});
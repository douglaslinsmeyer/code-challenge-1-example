"use strict";

var _flush = _interopRequireDefault(require("./flush"));

var _handParser = _interopRequireDefault(require("../handParser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Test that flush recognizes when a hand is NOT a flush.', function () {
  expect((0, _flush["default"])((0, _handParser["default"])('AS 2H 3H 5D 7C'))).toBe(false);
});
test('Test identification of flush.', function () {
  expect((0, _flush["default"])((0, _handParser["default"])('AS 2S 3S 5S 7S'))).toBe(true);
});
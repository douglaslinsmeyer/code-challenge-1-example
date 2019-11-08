"use strict";

var _maps = require("../maps");

var _straightFlush = _interopRequireDefault(require("./straight-flush"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Test identifies a non straight-flush.', function () {
  expect((0, _straightFlush["default"])(_maps.hands.highCard)).toBe(false);
});
test('Test identification of a straight-flush.', function () {
  expect((0, _straightFlush["default"])(_maps.hands.straightFlush)).toBe(true);
});
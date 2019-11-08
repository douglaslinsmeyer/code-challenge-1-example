"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

var _straight = _interopRequireDefault(require("./straight"));

var _flush = _interopRequireDefault(require("./flush"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _default(hand) {
  if (!(0, _flush["default"])(hand)) {
    return false;
  }

  if (!(0, _straight["default"])(hand)) {
    return false;
  }

  return true;
}
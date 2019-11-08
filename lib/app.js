'use strict';

var _minimist = _interopRequireDefault(require("minimist"));

var _lineReader = _interopRequireDefault(require("line-reader"));

var _handParser = require("./handParser");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var args = (0, _minimist["default"])(process.argv.slice(2));

if (!args.hasOwnProperty('f')) {
  throw 'Requires a "-f" parameter.';
}

_lineReader["default"].eachLine(args.f, function (line) {
  var hands = [];
  hands.push((0, _handParser.parseStringHand)(line.slice(0, 14)));
  hands.push((0, _handParser.parseStringHand)(line.slice(15, 29)));
  console.log(hands);
  return false;
});
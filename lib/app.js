'use strict';

var _minimist = _interopRequireDefault(require("minimist"));

var _lineReader = _interopRequireDefault(require("line-reader"));

var _handParser = _interopRequireDefault(require("./handParser"));

var _handScorer = _interopRequireDefault(require("./handScorer"));

var _bluebird = _interopRequireDefault(require("bluebird"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var args = (0, _minimist["default"])(process.argv.slice(2));

if (!args.hasOwnProperty('f')) {
  throw 'Requires a "-f" parameter.';
}

var handsWon = {
  playerOne: 0,
  playerTwo: 0
};

var eachLine = _bluebird["default"].promisify(_lineReader["default"].eachLine);

eachLine(args.f, function (line) {
  var playerOneHand = (0, _handParser["default"])(line.slice(0, 14));
  var playerTwoHand = (0, _handParser["default"])(line.slice(15, 29));
  var playerOneHandScore = (0, _handScorer["default"])(playerOneHand);
  var playerTwoHandScore = (0, _handScorer["default"])(playerTwoHand);
  console.log('Player1: ' + playerOneHandScore + ' | Player2: ' + playerTwoHandScore);

  if (playerOneHandScore > playerTwoHandScore) {
    handsWon.playerOne++;
  } else {
    handsWon.playerTwo++;
  }
}).then(function () {
  console.log('------------------------------');
  console.log(handsWon);
});
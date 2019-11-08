"use strict";
/**
 * 
 * Hand is an array of objects
 * 
 * [{ rank: "ACE", suit: "SPADES" }, {...}]
 * 
 * @param {array[obj]} hand 
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _default;

function _default(hand) {
  if (hand[0].suit !== hand[1].suit || hand[0].suit !== hand[2].suit || hand[0].suit !== hand[3].suit || hand[0].suit !== hand[4].suit) {
    return false;
  }

  return true;
}
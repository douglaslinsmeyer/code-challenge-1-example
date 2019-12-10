'use strict';

import argParser from 'minimist';
import lineReader from 'line-reader';
import handParser from './handParser';
import handScorer from './handScorer';
import Promise from 'bluebird';

const args = argParser(process.argv.slice(2));

if (!args.hasOwnProperty('f')) {
    throw 'Requires a "-f" parameter.';
}

let handsWon = {
    playerOne: 0,
    playerTwo: 0,
};

const eachLine = Promise.promisify(lineReader.eachLine);
eachLine(args.f, function(line) {
    const playerOneHand = handParser(line.slice(0, 14));
    const playerTwoHand = handParser(line.slice(15, 29));

    const playerOneHandScore = handScorer(playerOneHand);
    const playerTwoHandScore = handScorer(playerTwoHand);

    console.log('Player1: ' + playerOneHandScore + ' | Player2: ' + playerTwoHandScore);

    if (playerOneHandScore > playerTwoHandScore) {
        handsWon.playerOne++;
    } else {
        handsWon.playerTwo++;
    }
}).then(() => {
    console.log('------------------------------');
    console.log(handsWon);
});

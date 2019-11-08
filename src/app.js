'use strict';

import argParser from 'minimist';
import lineReader from 'line-reader';
import { handParser } from './handParser';

const args = argParser(process.argv.slice(2));

if (!args.hasOwnProperty('f')) {
    throw 'Requires a "-f" parameter.';
}

lineReader.eachLine(args.f, function(line) {
    const hands = [];
    hands.push(handParser(line.slice(0,13)));
    hands.push(handParser(line.slice(15, 29)));

    console.log(hands);

    return false;
});

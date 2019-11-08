"use strict";

import straightParser from './straight';
import flushParser from './flush';

export default function(hand) {
    if (!flushParser(hand)) {
        return false;
    }

    if (!straightParser(hand)) {
        return false;
    }

    return true;
}
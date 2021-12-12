"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var diveDistanceCalculator_1 = require("./diveDistanceCalculator");
var file = (0, fs_1.readFileSync)('src/day2/day2.txt', 'utf-8');
var inputLines = file.split('\n').map(function (line) { return line.split(" "); });
var diveRoute = inputLines.map(function (_a) {
    var direction = _a[0], numString = _a[1];
    return [direction, parseInt(numString, 10)];
});
console.log((0, diveDistanceCalculator_1.simpleCalculator)(diveRoute));
console.log((0, diveDistanceCalculator_1.complexCalculator)(diveRoute));

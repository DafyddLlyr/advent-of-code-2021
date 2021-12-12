import { readFileSync } from 'fs';
import { directions, simpleCalculator, diveRoute, complexCalculator } from './diveDistanceCalculator';

const file: string = readFileSync('src/day2/day2.txt', 'utf-8');
const inputLines = file.split('\n').map(line => line.split(" "));
const diveRoute: diveRoute = inputLines.map(([direction, numString]) => [direction as directions, parseInt(numString, 10)]);

console.log(simpleCalculator(diveRoute));
console.log(complexCalculator(diveRoute));
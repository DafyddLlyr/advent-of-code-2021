import { readFileSync } from 'fs';
import slidingSonarSweep from './slidingSonarSweep';
import sonarSweep from './sonarSweep';

const file: string = readFileSync('src/day1/day1.txt', 'utf-8');
const input: Array<number> = file.split('\n').map(Number);

console.log(sonarSweep(input));
console.log(slidingSonarSweep(input));
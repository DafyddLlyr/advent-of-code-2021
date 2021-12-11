"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var slidingSonarSweep_1 = __importDefault(require("./slidingSonarSweep"));
var sonarSweep_1 = __importDefault(require("./sonarSweep"));
var file = (0, fs_1.readFileSync)('src/day1/day1.txt', 'utf-8');
var input = file.split('\n').map(Number);
console.log((0, sonarSweep_1.default)(input));
console.log((0, slidingSonarSweep_1.default)(input));

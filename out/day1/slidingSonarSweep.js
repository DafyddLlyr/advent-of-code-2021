"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sonarSweep_1 = __importDefault(require("./sonarSweep"));
var slidingSonarSweep = function (input) {
    var slidingWindows = [];
    for (var i = 0; i < input.length - 1; i++) {
        var sumWindow = input.slice(i, i + 3).reduce(function (a, b) { return a + b; });
        slidingWindows.push(sumWindow);
    }
    var result = (0, sonarSweep_1.default)(slidingWindows);
    return result;
};
exports.default = slidingSonarSweep;

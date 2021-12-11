"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sonarSweep_1 = __importDefault(require("./sonarSweep"));
var slidingSonarSweep = function (input) {
    var slidingWindow = [];
    for (var i = 0; i < input.length - 1; i++) {
        var window_1 = input.slice(i, i + 3);
        var sumWindow = window_1.reduce(function (a, b) { return a + b; });
        slidingWindow.push(sumWindow);
    }
    var result = (0, sonarSweep_1.default)(slidingWindow);
    return result;
};
exports.default = slidingSonarSweep;

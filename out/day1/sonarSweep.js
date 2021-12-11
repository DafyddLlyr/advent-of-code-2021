"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sonarSweep = function (input) {
    var numberOfIncreases = 0;
    input.forEach(function (depth, index) {
        if (index === 0)
            return 0;
        if (depth > input[index - 1])
            numberOfIncreases += 1;
    });
    return numberOfIncreases;
};
exports.default = sonarSweep;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.complexCalculator = exports.simpleCalculator = void 0;
var simpleCalculator = function (diveRoute) {
    var _a = [0, 0], totalDepth = _a[0], totalHorizontal = _a[1];
    diveRoute.forEach(function (_a) {
        var direction = _a[0], distance = _a[1];
        if (direction === "up")
            totalDepth -= distance;
        if (direction === "down")
            totalDepth += distance;
        if (direction === "forward")
            totalHorizontal += distance;
    });
    return totalDepth * totalHorizontal;
};
exports.simpleCalculator = simpleCalculator;
var complexCalculator = function (diveRoute) {
    var _a = [0, 0, 0], totalDepth = _a[0], totalHorizontal = _a[1], aim = _a[2];
    diveRoute.forEach(function (_a) {
        var direction = _a[0], distance = _a[1];
        if (direction === "up")
            aim -= distance;
        if (direction === "down")
            aim += distance;
        if (direction === "forward") {
            totalHorizontal += distance;
            if (aim)
                totalDepth += (aim * distance);
        }
    });
    return totalDepth * totalHorizontal;
};
exports.complexCalculator = complexCalculator;

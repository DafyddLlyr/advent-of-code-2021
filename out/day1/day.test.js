"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var sonarSweep_1 = __importDefault(require("./sonarSweep"));
var slidingSonarSweep_1 = __importDefault(require("./slidingSonarSweep"));
describe("Sonar Sweep", function () {
    it("should return zero for just a single item", function () {
        expect((0, sonarSweep_1.default)([199])).toBe(0);
    });
    it("should return 1 for a single increase", function () {
        var input = [1, 2];
        expect((0, sonarSweep_1.default)(input)).toBe(1);
    });
    it("should not count decreases", function () {
        var input = [1, 2, 1, 1, 1];
        expect((0, sonarSweep_1.default)(input)).toBe(1);
    });
    it("should return 2 for 2 increases", function () {
        var input = [1, 2, 3];
        expect((0, sonarSweep_1.default)(input)).toBe(2);
    });
    it("should count total number of increases, split across different groups", function () {
        var input = [1, 2, 3, 3, 3, 4, 5, 5, 6];
        expect((0, sonarSweep_1.default)(input)).toBe(5);
    });
    it("should count increases on the previous number, not the previous high", function () {
        var input = [10, 20, 30, 20, 25];
        expect((0, sonarSweep_1.default)(input)).toBe(3);
    });
    it("should return 7 for the example input", function () {
        var exampleInput = [
            199, 200, 208, 210, 200,
            207, 240, 269, 260, 263,
        ];
        expect((0, sonarSweep_1.default)(exampleInput)).toBe(7);
    });
});
describe("Sonar Sweep with a three-measurement sliding window", function () {
    it("should return 0 for only one input", function () {
        var input = [0];
        expect((0, slidingSonarSweep_1.default)(input)).toBe(0);
    });
    it("should return 1 for a single increase", function () {
        var input = [1, 1, 1, 2];
        expect((0, slidingSonarSweep_1.default)(input)).toBe(1);
    });
    it("should not count decreases", function () {
        var input = [1, 1, 1, 2, 1];
        expect((0, slidingSonarSweep_1.default)(input)).toBe(1);
    });
    it("should return 2 for 2 increases", function () {
        var input = [1, 1, 1, 2, 2];
        expect((0, slidingSonarSweep_1.default)(input)).toBe(2);
    });
    it("should count total number of increases, split across different groups", function () {
        var input = [1, 1, 1, 2, 2, 1, 2, 3, 4];
        expect((0, slidingSonarSweep_1.default)(input)).toBe(4);
    });
    it("should count increases on the previous number, not the previous high", function () {
        var input = [1, 1, 1, 2, 3, 1, 1, 3,];
        expect((0, slidingSonarSweep_1.default)(input)).toBe(2);
    });
    it("should return 5 for the example input", function () {
        var exampleInput = [
            199, 200, 208, 210, 200,
            207, 240, 269, 260, 263,
        ];
        expect((0, slidingSonarSweep_1.default)(exampleInput)).toBe(5);
    });
});

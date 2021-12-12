"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var diveDistanceCalculator_1 = require("./diveDistanceCalculator");
describe("Simple Dive Distance Calculator", function () {
    it("multiplies horizontal by depth in a simple route", function () {
        var input = [
            ["forward", 5],
            ["down", 10],
        ];
        expect((0, diveDistanceCalculator_1.simpleCalculator)(input)).toBe(50);
    });
    it("sums multiple horizontal distances", function () {
        var input = [
            ["forward", 5],
            ["forward", 5],
            ["forward", 5],
            ["down", 10],
        ];
        expect((0, diveDistanceCalculator_1.simpleCalculator)(input)).toBe(150);
    });
    it("sums multiple down distances", function () {
        var input = [
            ["down", 5],
            ["down", 5],
            ["forward", 5],
            ["down", 10],
        ];
        expect((0, diveDistanceCalculator_1.simpleCalculator)(input)).toBe(100);
    });
    it("correctly adds/removes depth", function () {
        var input = [
            ["down", 7],
            ["up", 2],
            ["forward", 5],
            ["down", 10],
        ];
        expect((0, diveDistanceCalculator_1.simpleCalculator)(input)).toBe(75);
    });
    it("correctly solves the example input", function () {
        var input = [
            ["forward", 5],
            ["down", 5],
            ["forward", 8],
            ["up", 3],
            ["down", 8],
            ["forward", 2],
        ];
        expect((0, diveDistanceCalculator_1.simpleCalculator)(input)).toBe(150);
    });
});
describe("Complex Dive Distance Calculator", function () {
    it("multiplies horizontal by depth in a simple route", function () {
        var input = [
            ["forward", 5],
            ["down", 10],
        ];
        expect((0, diveDistanceCalculator_1.complexCalculator)(input)).toBe(0);
    });
    it("multiplies depth by aim, for a down movement", function () {
        var input = [
            ["down", 10],
            ["forward", 5],
        ];
        expect((0, diveDistanceCalculator_1.complexCalculator)(input)).toBe(250);
    });
    it("multiplies depth by aim, for an up movement", function () {
        var input = [
            ["down", 10],
            ["up", 5],
            ["forward", 5],
        ];
        expect((0, diveDistanceCalculator_1.complexCalculator)(input)).toBe(125);
    });
    it("correctly solves the example input", function () {
        var input = [
            ["forward", 5],
            ["down", 5],
            ["forward", 8],
            ["up", 3],
            ["down", 8],
            ["forward", 2],
        ];
        expect((0, diveDistanceCalculator_1.complexCalculator)(input)).toBe(900);
    });
});

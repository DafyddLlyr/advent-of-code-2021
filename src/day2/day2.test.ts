import { simpleCalculator, complexCalculator, diveRoute } from "./diveDistanceCalculator";

describe("Simple Dive Distance Calculator", () => {
  it("multiplies horizontal by depth in a simple route", () => {
    const input: diveRoute = [
      ["forward", 5],
      ["down", 10],
    ];
    expect(simpleCalculator(input)).toBe(50);
  })

  it("sums multiple horizontal distances", () => {
    const input: diveRoute = [
      ["forward", 5],
      ["forward", 5],
      ["forward", 5],
      ["down", 10],
    ];
    expect(simpleCalculator(input)).toBe(150);
  });

  it("sums multiple down distances", () => {
    const input: diveRoute = [
      ["down", 5],
      ["down", 5],
      ["forward", 5],
      ["down", 10],
    ];
    expect(simpleCalculator(input)).toBe(100);
  });

  it("correctly adds/removes depth", () => {
    const input: diveRoute = [
      ["down", 7],
      ["up", 2],
      ["forward", 5],
      ["down", 10],
    ];
    expect(simpleCalculator(input)).toBe(75);
  });

  it("correctly solves the example input", () => {
    const input: diveRoute = [
      ["forward", 5],
      ["down", 5],
      ["forward", 8],
      ["up", 3],
      ["down", 8],
      ["forward", 2],
    ];
    expect(simpleCalculator(input)).toBe(150);
  });
});

describe("Complex Dive Distance Calculator", () => {
  it("multiplies horizontal by depth in a simple route", () => {
    const input: diveRoute = [
      ["forward", 5],
      ["down", 10],
    ];
    expect(complexCalculator(input)).toBe(0);
  });

  it("multiplies depth by aim, for a down movement", () => {
    const input: diveRoute = [
      ["down", 10],
      ["forward", 5],
    ];
    expect(complexCalculator(input)).toBe(250);
  });

  it("multiplies depth by aim, for an up movement", () => {
    const input: diveRoute = [
      ["down", 10],
      ["up", 5],
      ["forward", 5],
    ];
    expect(complexCalculator(input)).toBe(125);
  });

  it("correctly solves the example input", () => {
    const input: diveRoute = [
      ["forward", 5],
      ["down", 5],
      ["forward", 8],
      ["up", 3],
      ["down", 8],
      ["forward", 2],
    ];
    expect(complexCalculator(input)).toBe(900);
  });

});
import sonarSweep from "./sonarSweep";
import slidingSonarSweep from "./slidingSonarSweep";

describe("Sonar Sweep", () => {
  it("should return zero for just a single item", () => {
    expect(sonarSweep([199])).toBe(0);
  });

  it("should return 1 for a single increase", () => {
    const input = [1, 2]
    expect(sonarSweep(input)).toBe(1);
  });

  it("should not count decreases", () => {
    const input = [1, 2, 1, 1, 1];
    expect(sonarSweep(input)).toBe(1);
  })
  
  it("should return 2 for 2 increases", () => {
    const input = [1, 2, 3];
    expect(sonarSweep(input)).toBe(2);
  });

  it("should count total number of increases, split across different groups", () => {
    const input = [1, 2, 3, 3, 3, 4, 5, 5, 6];
    expect(sonarSweep(input)).toBe(5);
  });

  it("should count increases on the previous number, not the previous high", () => {
    const input = [10, 20, 30, 20, 25];
    expect(sonarSweep(input)).toBe(3);
  });

  it("should return 7 for the example input", () => {
    const exampleInput = [
      199, 200, 208, 210, 200,
      207, 240, 269, 260, 263,
    ]
    expect(sonarSweep(exampleInput)).toBe(7);
  })
});

describe("Sonar Sweep with a three-measurement sliding window", () => {
  it("should return 0 for only one input", () => {
    const input = [0];
    expect(slidingSonarSweep(input)).toBe(0);
  });

  it("should return 1 for a single increase", () => {
    const input = [1, 1, 1, 2]
    expect(slidingSonarSweep(input)).toBe(1);
  });

  it("should not count decreases", () => {
    const input = [1, 1, 1, 2, 1];
    expect(slidingSonarSweep(input)).toBe(1);
  })
  
  it("should return 2 for 2 increases", () => {
    const input = [1, 1, 1, 2, 2];
    expect(slidingSonarSweep(input)).toBe(2);
  });

  it("should count total number of increases, split across different groups", () => {
    const input = [1, 1, 1, 2, 2, 1, 2, 3, 4];
    expect(slidingSonarSweep(input)).toBe(4);
  });

  it("should count increases on the previous number, not the previous high", () => {
    const input = [1, 1, 1, 2, 3, 1, 1, 3,];
    expect(slidingSonarSweep(input)).toBe(2);
  });

  it("should return 5 for the example input", () => {
    const exampleInput = [
      199, 200, 208, 210, 200,
      207, 240, 269, 260, 263,
   ];
   expect(slidingSonarSweep(exampleInput)).toBe(5);
  })
});
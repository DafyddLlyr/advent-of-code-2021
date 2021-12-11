import sonarSweep from "./sonarSweep";

const slidingSonarSweep = (input: Array<number>): number => {
  const slidingWindows: Array<number> = [];
  for (let i = 0; i < input.length - 1; i++) {
    const sumWindow = input.slice(i, i + 3).reduce((a, b) => a + b);
    slidingWindows.push(sumWindow);
  }
  const result = sonarSweep(slidingWindows);
  return result;
};

export default slidingSonarSweep;
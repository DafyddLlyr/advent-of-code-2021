const sonarSweep = (input: Array<number>): number => {
  let numberOfIncreases: number = 0
  input.forEach((depth, index) => {
    if (index === 0) return 0;
    if (depth > input[index - 1]) numberOfIncreases += 1;
  });
  return numberOfIncreases;
};

export default sonarSweep;
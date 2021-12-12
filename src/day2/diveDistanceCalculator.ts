type directions =  "up" | "down" | "forward";
type diveRoute = Array<[directions, number]>;

const simpleCalculator = (diveRoute: diveRoute): Number => {
  let [totalDepth, totalHorizontal] = [0, 0];
  diveRoute.forEach(([direction, distance]) => {
    if (direction === "up") totalDepth -= distance;
    if (direction === "down") totalDepth += distance;
    if (direction === "forward") totalHorizontal += distance;
  });
  return totalDepth * totalHorizontal;
};

const complexCalculator = (diveRoute: diveRoute): Number => {
  let [totalDepth, totalHorizontal, aim] = [0, 0, 0];
  diveRoute.forEach(([direction, distance]) => {
    if (direction === "up") aim -= distance;
    if (direction === "down") aim += distance;
    if (direction === "forward") {
      totalHorizontal += distance;
      if (aim) totalDepth += (aim * distance);
    }
  });
  return totalDepth * totalHorizontal;
}

export { directions, diveRoute, simpleCalculator, complexCalculator };
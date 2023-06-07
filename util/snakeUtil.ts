import { Coordinate, Direction } from "../hooks/useSnakeGame.ts";

export const determineNextMove = (
  [x, y]: [x: number, y: number],
  dir: Direction
) => {
  let newX = x;
  let newY = y;

  switch (dir) {
    case "E":
      newX += 1;
      break;
    case "W":
      newX -= 1;
      break;
    case "S":
      newY += 1;
      break;
    case "N":
      newY -= 1;
  }

  return [newX, newY] as Coordinate;
};

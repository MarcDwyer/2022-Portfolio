import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "https://esm.sh/preact@10.13.1/hooks";
import { determineNextMove } from "../util/snakeUtil.ts";
import { useLinkedList } from "./useLinkedList.ts";

export type Coordinate = [x: number, y: number];

const createSnakeGrid = (cols: number, rows: number): SnakeGrid => {
  const grid = new Array(cols);

  for (let col = 0; col < grid.length; col++) {
    const row = new Array(rows).fill(0);
    grid[col] = row;
  }

  return grid;
};
type SnakeGrid = (0 | 1)[][];

enum GameState {
  Pending = "pending",
  InSession = "insession",
  Ended = "ended",
}
type KeysOfGameState = keyof typeof GameState;
type GameStateValues = (typeof GameState)[KeysOfGameState];
export type Direction = "N" | "W" | "E" | "S";

const cols = 22;
const rows = 22;

export const useSnakeGame = () => {
  const [gameState, setGameState] = useState<GameStateValues>(
    GameState.Pending
  );

  const [grid, setGrid] = useState<null | SnakeGrid>(null);

  const { rerender, head, append } = useLinkedList<Coordinate>();
  const [direction, setDirection] = useState<Direction>("E");
  const timer = useRef<number>();

  // const snakeCells = useMemo(() => {
  //   const cells: [x: number, y: number][] = [];

  //   let curr = head;

  //   while (curr) {
  //     cells.push(curr.value);
  //     curr = curr.next;
  //   }

  //   return cells;
  // }, [head]);

  useEffect(() => {
    const snakeGrid = createSnakeGrid(22, 22);

    const halfCol = Math.floor(cols / 2);
    const halfRow = Math.floor(rows / 2);

    const startingCells: Coordinate[] = [
      [halfCol, halfRow],
      [halfCol, halfRow - 1],
      [halfCol, halfRow - 2],
    ];
    for (const [x, y] of startingCells) {
      snakeGrid[x][y] = 1;
      append([x, y]);
    }

    setGrid(snakeGrid);
  }, [setGrid, append]);

  const start = () => {
    function moveCells() {
      if (!head) return;
      head.value = determineNextMove(head.value, direction);
      let prevCell = [...head.value] as Coordinate;
      let curr = head.next;
      while (curr) {
        const nextPrev = [...prevCell] as Coordinate;
        curr.value = prevCell;
        prevCell = nextPrev;
        curr = curr.next;
      }
      rerender();
    }

    timer.current = setInterval(moveCells, 1000);
  };

  const end = () => {
    clearInterval(timer.current);
  };

  return {
    grid,
    gameState,
    head,
    start,
    end,
  };
};

import { useSnakeGame } from "../hooks/useSnakeGame.ts";

type CellProps = {
  state: 0 | 1;
  isHead: boolean;
};
function Cell({ state, isHead }: CellProps) {
  const getColor = () => {
    if (isHead) {
      return "bg-green-700";
    }
    if (state) {
      return "bg-gray-700";
    }
    return "";
  };

  return <div class={`h-8 w-8 ${getColor()}`}></div>;
}
export default function Snake() {
  const { grid, head, start } = useSnakeGame();
  return (
    <div class="snake-container m-auto flex flex-col p-5">
      <button class="ml-auto mr-auto mb-5 w-44 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
        Start
      </button>
      <div class="flex flex-col m-auto border-2 border-gray-700">
        {grid &&
          head &&
          grid.map((gridRow, colIndex) => {
            return (
              <div className="row flex">
                {gridRow.map((state, rowIndex) => {
                  const [headX, headY] = head.value;
                  const isHead = headX === colIndex && headY === rowIndex;
                  return <Cell isHead={isHead} state={state} />;
                })}
              </div>
            );
          })}
      </div>
    </div>
  );
}

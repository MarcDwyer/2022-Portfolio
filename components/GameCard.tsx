export type GameProps = {
  title: string;
  gameName: string;
};

export function GameCard({ title, gameName }: GameProps) {
  return (
    <div class="flex bg-nav p-5 rounded-lg h-full">
      <div class="m-auto flex flex-col">
        <h2 class="font-bold">{title}</h2>
        <h3 class="font-bold"></h3>
        <p class="mt-5"></p>
        <a
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          href={`/games/${gameName}`}
        >
          Go to
        </a>
      </div>
    </div>
  );
}

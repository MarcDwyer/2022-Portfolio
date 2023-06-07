import { GameCard } from "../../components/GameCard.tsx";
import { MainContainer } from "../../components/MainContainer.tsx";
import { PathMatches } from "../../components/Navbar.tsx";

export default function Games() {
  return (
    <MainContainer title="Games" path="/games" pathMatch={PathMatches.Games}>
      <div class="w-full h-full flex overflow-y-auto mb-10">
        <div class="flex flex-col max-w-screen-lg mx-auto my-16 px(4 sm:6 md:8) space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-3 items-center gap-4 grid-flow-row auto-rows-fr">
            <GameCard gameName="snake" title="Snake Game" />
          </div>
        </div>
      </div>
    </MainContainer>
  );
}

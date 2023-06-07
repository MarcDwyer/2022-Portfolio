import { MainContainer } from "../../components/MainContainer.tsx";
import { PathMatches } from "../../components/Navbar.tsx";
import Snake from "../../islands/Snake.tsx";

export default function SnakeGame() {
  return (
    <MainContainer
      path="/games/snake"
      title="Snake"
      pathMatch={PathMatches.Games}
    >
      <Snake />
    </MainContainer>
  );
}

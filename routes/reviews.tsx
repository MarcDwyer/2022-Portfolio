import { MainContainer } from "../components/MainContainer.tsx";
import { PathMatches } from "../components/Navbar.tsx";

export default function Reviews() {
  return (
    <MainContainer
      path="/reviews"
      pathMatch={PathMatches.Reviews}
      title="Review"
    >
      <h1>leave a comment</h1> <h2>hello world</h2> is this live
    </MainContainer>
  );
}

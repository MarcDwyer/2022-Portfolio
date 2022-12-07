import { MainContainer } from "../components/MainContainer.tsx";

export default function Home() {
  return (
    <div id="main-content">
      <MainContainer path="/">
        <div className="bg-gray-800 w-full h-full">hello world</div>
      </MainContainer>
    </div>
  );
}

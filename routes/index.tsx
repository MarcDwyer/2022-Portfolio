import { MainContainer } from "../components/MainContainer.tsx";

export default function Home() {
  return (
    <div id="main-content">
      <MainContainer path="/">
        <div className="bg-nav w-full h-full flex">
          <div className="flex flex-col m-auto">
            <div className="flex flex-col border-b-2 border-gray-500">
              <h1 className="m-auto font-bold text-6xl">MARC DWYER</h1>
              <h2 className="ml-auto mr-auto mt-2 mb-2 font-bold text-3xl">
                Front End Engineer
              </h2>
            </div>
            <a
              href="/projects"
              className="font-bold text-center m-auto w-40 p-4 mt-5 bg-gray-900 bg-btnColor"
            >
              View Projects
            </a>
          </div>
        </div>
      </MainContainer>
    </div>
  );
}

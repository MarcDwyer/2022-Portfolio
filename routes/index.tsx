import { Navbar } from "../components/Navbar.tsx";

export default function Home() {
  return (
    <div id="main-content">
      <div className="w-screen h-screen flex font-sans">
        <Navbar />
      </div>
    </div>
  );
}

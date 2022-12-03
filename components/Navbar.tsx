export function Navbar() {
  return (
    <nav className="w-96 h-screen flex bg-gray-900 text-gray-100">
      <div className="m-auto flex flex-wrap">
        <img
          src="https://i.imgur.com/F4iPL1v.png"
          className="h-40 w-40 rounded-full mt-5"
        />
        <div className="m-auto flex flex-col">
          <h1 className="m-auto font-bold text-2xl">Marc Dwyer</h1>
          <h2 className="m-auto font-bold">Front End Enginer</h2>
          <h2 className="m-auto font-bold">US/EU Citizenship</h2>
        </div>
      </div>
    </nav>
  );
}

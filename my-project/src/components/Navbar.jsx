const Navbar = () => {
  return (
    <nav className="flex flex-row items-center bg-white justify-between pt-5 ">
      <img src="src\assets\logo.jpg" className="w-40 ml-0=28"></img>
      <ul>
        <li className="text-dullGrey font-dmSans text-xl">
          <a href="#" className="font-dmSans m-5 p-2 hover:bg-lightRed hover:text-lightPeach hover:rounded-full ">
            Home
          </a>
          <a href="/Form" className="font-dmSans m-5 p-2 hover:bg-lightRed hover:text-lightPeach hover:rounded-full ">
            Share Recipe
          </a>
          <a href="/Cards" className="font-dmSans m-5 p-2 hover:bg-lightRed hover:text-lightPeach hover:rounded-full ">
            What's New
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 flex justify-center items-center bg-amber-100 px-6 py-2 rounded-full shadow-lg w-full max-w-[60%] md:max-w-[40%]">
        <div className="menu flex flex-wrap justify-center items-center gap-6 md:gap-10">
          <ul className="flex">
            <li>
              <a href="#about" className="hover:text-white font-inter text-sm md:text-md font-bold">About Us</a>
            </li>
          </ul>
          <ul className="flex">
            <li>
                <Link to="/signup" className="hover:text-white font-inter text-sm md:text-md font-bold">
                   Menu
                </Link>
              {/* <a href="/signup" className="hover:text-white font-inter text-sm md:text-md font-bold">Menu</a> */}
            </li>
          </ul>
          <ul className="flex">
            <li>
              <a href="#contact" className="hover:text-white font-inter text-sm md:text-md font-bold">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;
  
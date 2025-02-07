import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <nav className="ml-20 fixed top-4 z-50 flex justify-center items-center pt-4 pb-0 px-10 border-none rounded-full mx-auto bg-amber-100">
               <div className="menu flex space-x-10 mb-4">
                <ul className="flex space-x-2">
                    <li>
                    <a href="#about" className="hover:text-white font-inter text-md font-bold">About Us</a>
                    </li>
                </ul>
                <ul className="flex space-x-4">
                    <li>
                    <Link to="/signup" className="hover:text-white font-inter text-md font-bold">
                     Menu
                    </Link>
                    </li>
                </ul>
                <ul className="flex space-x-4">
                    <li>
                    <a href="#contact" className="hover:text-white font-inter text-md font-bold">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
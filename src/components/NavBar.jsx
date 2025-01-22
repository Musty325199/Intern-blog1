import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHamburger } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <nav className="bg-violet-950 w-full flex md:flex-row flex-col gap-10 px-10 py-3 items-center justify-around">
      <div className="flex items-center gap-10 font-bold text-lg text-white">
        <Link to="/">
          <h1>
            Daily <span>Blogs</span>{" "}
          </h1>
        </Link>

        <div className="md:hidden ml-16">
          <button onClick={toggleMenu} className="text-white">
            {openMenu ? <IoMdClose /> : <FaHamburger />}
          </button>
        </div>
      </div>
        {/* Desktop Navlinks */}
      <div className="hidden sm:flex items-center gap-10">
      <NavLink
          to="/"
          className={({ isActive }) =>
            `text-white hover:text-violet-400 hover:font-bold ${
              isActive ? "text-violet-400 font-bold" : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-white hover:text-violet-400 hover:font-bold ${
              isActive ? "text-violet-400 font-bold" : ""
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-white hover:text-violet-400 hover:font-bold ${
              isActive ? "text-violet-400 font-bold" : ""
            }`
          }
        >
          Contact
        </NavLink>    
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `text-white hover:text-violet-400 hover:font-bold ${
              isActive ? "text-violet-400 font-bold" : ""
            }`
          }
          onClick={toggleMenu}
        >
          Login
        </NavLink>
      </div>

          {/* Mobile navlinks  */}
      <div
        className={`sm:hidden ${
          openMenu ? "block" : "hidden"
        } mt-4 w-full z-100 flex items-center flex-col gap-5 space-y-4`}
      >

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-white hover:text-violet-400 hover:font-bold ${
              isActive ? "text-violet-400 font-bold" : ""
            }`
          }
          onClick={toggleMenu}
        >
          About
        </NavLink>
        <a
          href="footer"
          className={({ isActive }) =>
            `text-white hover:text-violet-400 hover:font-bold ${
              isActive ? "text-violet-400 font-bold" : ""
            }`
          }
          onClick={toggleMenu}
        >
          Contact
        </a>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            `text-white hover:text-violet-400 hover:font-bold ${
              isActive ? "text-violet-400 font-bold" : ""
            }`
          }
          onClick={toggleMenu}
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;

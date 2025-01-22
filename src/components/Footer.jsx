import { NavLink } from "react-router-dom";



const Footer = () => {
  return (
    <div className="bg-violet-950 text-white md:p-10 py-5" >
      <div className="flex md:flex-row flex-col items-center justify-around gap-10">
        <div id="footer" className="text-lg">
          <p>123 Riverside Rd, CA 92501, USA</p>
          <p>09065323916</p>
          <p>dailyblogs@demo.com</p>
        </div>
          <div className="flex md:flex-row flex-col items-center gap-5 md:gap-10 tex-lg">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-white hover:text-violet-400 hover:font-bold ${
                  isActive
                    ? "text-violet-400 font-bold"
                    : ""
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-white hover:text-violet-400 hover:font-bold ${
                  isActive
                  ? "text-violet-400 font-bold"
                  : ""
                }`
              }
            >
              Contact
            </NavLink>
          </div>
          <div className="bg-white flex items-center flex-col text-black p-5 gap-5 rounded-lg">
            <p className="text-sm text-violet-950 font-semibold italic">Subscribe to our Newsletter for latest updates</p>
            <div className="flex items-center border border-violet-950 bg-white">
                <input type="text" placeholder="Enter your email" className="bg-transparent p-2 flex-1" />
                <input type="submit" placeholder="Subscribe" className="bg-violet-950 text-white px-5 py-2 cursor-pointer" />
            </div>
            </div>
        </div>
        <p className="text-center text-sm mt-10">Developed and designed by Musty. @2025 copyright</p>
      </div>
  );
};

export default Footer;

import { useRef, useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { navLinks } from "../constants";
import Logo from "./Logo";
import styles from "../styles";
import { NavLink } from "react-router-dom";

// let useClickOutside = (handler) => {
// let domNode = useRef();

//   useEffect(() => {
//     let mobileNavbarHandler = (event) => {
//       if (!domNode.current.contains(event.target)) {
//         handler();
//       }
//     };

//     document.addEventListener("mousedown", mobileNavbarHandler);

//     return () => {
//       document.removeEventListener("mousedown", mobileNavbarHandler);
//     };
//   });

//   return domNode;
// };

const Navbar = () => {
  //   const [nav, setNav] = useState(false);

  //   const handleNav = () => {
  //     setNav(!nav);
  //   };

  //   const handleNavItemClick = () => {
  //     setNav(false);
  //   };

  //   let mobileNavbar = useClickOutside(() => {
  //     setNav(false);
  //   });

  return (
    <header
      className={`${styles.boxWidth} ${styles.headerGlassmorphism} mb-6 flex w-full items-center justify-between`}
    >
      <Logo size={"original"} />
      <nav className="rounded-b-xl sm:flex">
        <ul className="flex items-center gap-4 text-center sm:text-lg md:text-xl">
          {navLinks.map((nav, index) => (
            <li className="hover:text-primary" key={nav.id}>
              <NavLink
                to={nav.id}
                className={({ isActive }) => {
                  return isActive ? "text-primary" : "";
                }}
              >
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile */}
      {/* <div onClick={handleNav} className="block cursor-pointer sm:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <nav
        ref={mobileNavbar}
        className={`${styles.transitionEffect700} glassmorphism fixed z-50 h-[100vh] w-[60%] gap-10 rounded-b-xl p-5 ${
          nav ? "left-0 top-0 backdrop-blur-xl" : "left-[-100%]"
        }`}
      >
        <ul className="flex flex-col justify-between gap-3 text-lg sm:text-lg md:text-xl">
          {navLinks.map((nav, index) => (
            <li
              className="hover:text-primary"
              onClick={handleNavItemClick}
              key={nav.id}
            >
              <NavLink
                to={nav.id}
                className={({ isActive }) => {
                  isActive ? "text-primary" : "";
                }}
              >
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav> */}
    </header>
  );
};

export default Navbar;

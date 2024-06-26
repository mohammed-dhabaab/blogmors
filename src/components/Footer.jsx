import { navLinks } from "../constants";
import Logo from "./Logo";
import styles from "../styles";
import { FaHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className={`${styles.boxWidth} ${styles.footerGlassmorphism} relative mt-6 flex w-full items-center justify-between`}
    >
      <div className="flex flex-col gap-4">
        <Logo size={"original"} />
        <p className="font-badScript">
          Made with <FaHeart className="inline-block rotate-[4deg]" /> by{" "}
          <a
            href="http://mohammeddhabaab.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-badScript hover:text-primary"
          >
            Mohammed Dhabaab!
          </a>
        </p>
      </div>
      <nav className="hidden justify-between rounded-b-xl sm:flex">
        <ul className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-lg md:text-xl">
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
    </footer>
  );
};

export default Footer;

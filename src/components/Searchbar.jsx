import { FaSearch } from "react-icons/fa";
import styles from "../styles";
import { useState, useEffect } from "react";

const Searchbar = ({ className, setQuery, selectedKeyword }) => {
  const [passedKeyword, setPassedKeyword] = useState("");

  useEffect(() => {
    setPassedKeyword(selectedKeyword);
    setQuery(selectedKeyword);
  }, [selectedKeyword, setQuery]);

  const handleInputChange = (e) => {
    setPassedKeyword(e.target.value);
    setQuery(e.target.value);
  };

  return (
    <div
      className={`${styles.contentGlassmorphism} relative flex items-center gap-2 px-4 py-1 ${className}`}
    >
      <FaSearch />
      <input
        value={passedKeyword}
        onChange={handleInputChange}
        className="w-full border-none bg-transparent outline-none focus:outline-none"
        type="search"
        name="search"
        id="search"
      />
    </div>
  );
};

export default Searchbar;

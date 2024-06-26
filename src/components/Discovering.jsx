import styles from "../styles";
import { discoverTitle, postsCategories } from "../constants";
import Searchbar from "./Searchbar";
import Button from "./Button";
import { useState } from "react";

const Discovering = ({ setQuery }) => {
  const [selectedKeyword, setSelectedKeyword] = useState("");
  const searchKeyword = (keyword) => {
    setSelectedKeyword(keyword);
  };

  return (
    <aside>
      <div
        className={`${styles.contentBoxWidth} ${styles.mainGlassmorphism} sticky top-4 flex flex-col gap-4 p-6`}
      >
        <h2 className={`${styles.heading2}`}>{discoverTitle}</h2>

        <Searchbar
          className={"w-full"}
          setQuery={setQuery}
          selectedKeyword={selectedKeyword}
        />

        <ul className="flex flex-wrap gap-4">
          {postsCategories.map((category, index) => (
            <li key={category.id}>
              <Button
                type={"secondary"}
                title={category.title}
                size={"sm"}
                onClick={() => searchKeyword(category.title)}
              />
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Discovering;

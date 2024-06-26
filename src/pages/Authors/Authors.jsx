import { authors } from "../../constants";
import styles from "../../styles";
import AuthorCard from "./AuthorCard";

const Authors = () => {
  let count = 0;

  return (
    <main className={`${styles.boxWidth} flex flex-col gap-4`}>
      {Object.keys(authors).map((author, index) => {
        if (count < 4) {
          count++;
          return <AuthorCard key={author} authorId={author} />;
        }
      })}
    </main>
  );
};

export default Authors;

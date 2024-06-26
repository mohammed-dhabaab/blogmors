import Discovering from "../../components/Discovering";
import styles from "../../styles";
import Postscards from "./PostsCards";
import { useState } from "react";

const Posts = () => {
  const [query, setQuery] = useState("");

  return (
    <main className={`${styles.boxWidth} flex flex-col gap-6`}>
      <Discovering setQuery={setQuery} />
      <Postscards query={query} />
    </main>
  );
};

export default Posts;

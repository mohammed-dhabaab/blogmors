import Hero from "./Hero";
import styles from "../../styles";
import Discovering from "../../components/Discovering";
import Postscards from "./Postscards";
import { useState, useEffect } from "react";

const Home = () => {
  const [query, setQuery] = useState("");

  return (
    <main className={`${styles.boxWidth} flex flex-col gap-4`}>
      <Hero />
      <div
        className={`flex flex-col-reverse gap-4 md:grid md:grid-cols-[2fr_1fr] md:grid-rows-[max-content_min-content]`}
      >
        <Postscards query={query} />
        <Discovering setQuery={setQuery} />
      </div>
    </main>
  );
};

export default Home;

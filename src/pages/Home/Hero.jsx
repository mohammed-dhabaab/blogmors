import React from "react";
import { heroImg } from "../../assets";
import styles from "../../styles";
import { heroTitle, heroPara } from "../../constants";
import Button from "../../components/Button";

const Hero = () => {
  return (
    <section
      className={`${styles.contentBoxWidth} ${styles.mainGlassmorphism} flex flex-col gap-5 p-6 md:flex-row`}
    >
      <div className="flex flex-col justify-center">
        <h1 className={styles.heading1}>{heroTitle}</h1>
        <p className={`mt-4 text-xl`}>{heroPara}</p>
        <Button
          title="Start Discovering!"
          link={"/posts"}
          className="my-10"
          type={"primary"}
        />
      </div>
      <img
        src={heroImg}
        alt="hero"
        className="max-h-[400px] w-full object-contain"
      />
    </section>
  );
};

export default Hero;

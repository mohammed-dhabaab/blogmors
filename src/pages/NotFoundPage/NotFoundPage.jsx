import styles from "../../styles";
import Button from "../../components/Button";
import Logo from "../../components/Logo";
import { Link, useRouteError } from "react-router-dom";

const NotFoundPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      className={`${styles.boxWidth} flex h-screen w-screen flex-col items-center justify-center gap-2`}
    >
      <Link to="/">
        <Logo />
      </Link>

      <div className="mb-2 mt-6 flex flex-col items-center">
        <h1 className={`${styles.heading1} mb-2`}>Oops!</h1>
        <h2 className={`${styles.heading3}`}>
          {error.statusText || error.message}
        </h2>
        {/* <p className={`text-secondary`}>
          Sorry, an unexpected error has occurred
        </p> */}
      </div>
      <Button type={"primary"} size={"lg"} title={"Back to Home"} link={"/"} />
    </div>
  );
};

export default NotFoundPage;

import styles from "../../styles";
import { authors } from "../../constants";
import Button from "../../components/Button";

const AuthorHeader = ({ authorId }) => {
  return (
    <section
      className={`${styles.mainGlassmorphism} flex items-center justify-between p-6 md:hidden`}
    >
      <div className="flex items-center gap-2">
        <div className="h-full max-w-[60px]">
          <a href="">
            <img
              className="object-cover"
              src={authors[authorId].image}
              alt={authors[authorId].name}
            />
          </a>
        </div>
        <div>
          <h3 className={`${styles.heading3} ${styles.linkStyle}`}>
            <a href="">{authors[authorId].name}</a>
          </h3>
          <p>{authors[authorId].title}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2">
        <ul className="flex gap-4">
          {authors[authorId].links.map((link, index) => (
            <li key={link.id} className={`hover:scale-[1.1]`}>
              <a href={link.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={link.icon}
                  alt={link.title}
                  className="max-w-[18px]"
                />
              </a>
            </li>
          ))}
        </ul>
        <Button title={"Profile"} size={"sm"} link={`/authors/${authorId}`} />
      </div>
    </section>
  );
};

export default AuthorHeader;

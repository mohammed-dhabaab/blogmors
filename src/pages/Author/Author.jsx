import { Link, useParams } from "react-router-dom";
import { authors, posts } from "../../constants";
import styles from "../../styles";
import SectionsBracker from "../../components/SectionsBracker";

const Author = () => {
  const params = useParams();
  let authorId = params.authorId;
  const authorFeaturedPosts = authors[authorId].featuredPosts;

  return (
    <main
      className={`${styles.boxWidth} ${styles.mainGlassmorphism} flex flex-col items-center sm:flex-row sm:gap-20`}
    >
      <div className="flex flex-col gap-2 sm:w-[40%]">
        <div className="mb-1 flex items-center gap-2">
          <div className="h-full max-w-[60px]">
            <img
              className="object-cover"
              src={authors[authorId].image}
              alt={authors[authorId].name}
            />
          </div>
          <div>
            <h3 className={`${styles.heading3} ${styles.linkStyle}`}>
              {authors[authorId].name}
            </h3>
            <p className="mb-1">{authors[authorId].title}</p>
          </div>
        </div>

        <p>{authors[authorId].bio}</p>

        <div className="flex flex-col items-start">
          <ul className="mb-2 ml-2 flex gap-2">
            {authors[authorId].links.map((link, index) => (
              <li key={link.id} className={`hover:scale-[1.1]`}>
                <Link to={link.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={link.icon}
                    alt={link.title}
                    className="max-w-[18px]"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <SectionsBracker size={"sm"} className={"sm:hidden"} />

      <div className="flex w-full flex-col gap-2 sm:w-[60%]">
        {authorFeaturedPosts.map((postId, index) => (
          <div
            key={postId}
            className={`flex items-center justify-between gap-4`}
          >
            <p className={`${styles.linkStyle}`}>
              <Link to={`/posts/${postId}`}>{posts[postId].title}</Link>
            </p>

            <div className="flex max-w-[120px] items-center">
              <Link to={`/posts/${postId}`}>
                <img
                  className={`${styles.imageStyles}`}
                  src={posts[postId].image}
                  alt={posts[postId].imageAlt}
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Author;

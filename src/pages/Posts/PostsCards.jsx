import styles from "../../styles";
import { authors, posts, featuredPosts } from "../../constants";
import { Link } from "react-router-dom";
import { useMemo } from "react";

const Postscards = ({ query }) => {
  const filteredPosts = useMemo(() => {
    return Object.keys(posts).filter((postId) => {
      return posts[postId].keywords.some((keyword) => {
        return keyword.toLowerCase().includes(query.toLowerCase());
      });
    });
  }, [query]);

  let displayPosted = [];
  if (query === "") {
    displayPosted = featuredPosts;
  } else {
    displayPosted = filteredPosts;
  }

  return (
    <section className={`${styles.contentBoxWidth} flex flex-col gap-4`}>
      {displayPosted.map((postId, index) => (
        <article
          key={postId}
          className={`${styles.mainGlassmorphism} flex flex-col items-center justify-between gap-2 p-6 sm:flex-row`}
        >
          <div className="w-full">
            <div className="flex items-center gap-2">
              <div className="h-full max-w-[50px]">
                <Link to={`/authors/${posts[postId].author}`}>
                  <img
                    className={`${styles.imageStyles}`}
                    src={authors[posts[postId].author].image}
                    alt={authors[posts[postId].author].name}
                  />
                </Link>
              </div>
              <h3 className={`${styles.heading3} hover:text-primary`}>
                <Link to={`/authors/${posts[postId].author}`}>
                  {authors[posts[postId].author].name}
                </Link>
              </h3>
            </div>

            <h2 className={`${styles.heading2} mb-1 mt-2 hover:text-primary`}>
              <Link to={`/posts/${postId}`}>{posts[postId].title}</Link>
            </h2>

            <p className="mb-1 hover:text-primary">
              <Link to={`/posts/${postId}`}>
                {posts[postId].intro[0].slice(0, 100).trim() + "..."}
              </Link>
            </p>

            <div className="flex gap-2">
              <p className={`text-sm text-secondary`}>
                {posts[postId].date +
                  "\u00A0 • \u00A0" +
                  posts[postId].readingEstimatedTime}
              </p>
            </div>
          </div>

          <div className="flex h-full w-full items-center justify-center sm:w-auto sm:max-w-[160px]">
            <Link to={`/posts/${postId}`}>
              <img
                className={`${styles.imageStyles}`}
                src={posts[postId].image}
                alt={posts[postId].imageAlt}
              />
            </Link>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Postscards;

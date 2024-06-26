import styles from "../../styles";
import { authors, posts, featuredPosts } from "../../constants";
import { Link } from "react-router-dom";

const PostsRecommendations = () => {
  return (
    <section className={`${styles.boxWidth} ${styles.mainGlassmorphism}`}>
      <h3 className={`${styles.heading2} flex gap-2`}>Recommended for You!</h3>

      {featuredPosts.map((postId, index) => (
        <article
          key={postId}
          className={`flex items-center justify-between gap-1 p-6`}
        >
          <div>
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

            <div className="flex gap-2">
              <p className={`text-sm text-secondary`}>{posts[postId].date}</p>
              {"•"}
              <p className={`text-sm text-secondary`}>
                {posts[postId].readingEstimatedTime}
              </p>
            </div>
          </div>

          <div className="flex h-full max-w-[160px] items-center justify-center">
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

export default PostsRecommendations;

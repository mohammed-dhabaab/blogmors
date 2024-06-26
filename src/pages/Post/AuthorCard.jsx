import React from "react";
import styles from "../../styles";
import { authors, posts } from "../../constants";
import Button from "../../components/Button";
import SectionsBracker from "../../components/SectionsBracker";
import { Link } from "react-router-dom";

const AuthorCard = ({ authorId }) => {
  // const featuredAuthorpostId = 5;
  const authorFeaturedPosts = authors[authorId].featuredPosts;
  return (
    <aside>
      <div
        className={`${styles.mainGlassmorphism} sticky top-4 hidden flex-col justify-between gap-4 p-6 md:flex`}
      >
        <div className="flex flex-col gap-2">
          <div className="mb-1 flex items-center gap-2">
            <div className="h-full max-w-[60px]">
              <Link to={`/authors/${authorId}`}>
                <img
                  className="object-cover"
                  src={authors[authorId].image}
                  alt={authors[authorId].name}
                />
              </Link>
            </div>
            <div>
              <h3 className={`${styles.heading3} ${styles.linkStyle}`}>
                <Link to={`/authors/${authorId}`}>
                  {authors[authorId].name}
                </Link>
              </h3>
              <p className="mb-1">{authors[authorId].title}</p>
              <ul className="flex gap-4">
                {authors[authorId].links.map((link, index) => (
                  <li key={link.id} className={`hover:scale-[1.1]`}>
                    <Link
                      to={link.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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

          <p>{authors[authorId].bio}</p>
        </div>

        <Button title={"Profile"} link={`/authors/${authorId}`} />
        <SectionsBracker size={"sm"} />

        <div>
          <h3 className={`${styles.heading3} mb-2`}>
            More from {authors[authorId].firstName}{" "}
          </h3>
          <div className="flex flex-col gap-2">
            {authorFeaturedPosts.map((postId, index) => (
              <div
                key={postId}
                className={`flex items-center justify-between gap-2`}
              >
                <p className={`${styles.linkStyle}`}>
                  <Link to={`/posts/${postId}`}>{posts[postId].title}</Link>
                </p>

                <div className="flex max-w-[100px] items-center">
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
        </div>
      </div>
    </aside>
  );
};

export default AuthorCard;

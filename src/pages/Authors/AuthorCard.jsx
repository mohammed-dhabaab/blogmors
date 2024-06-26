import React from "react";
import styles from "../../styles";
import { authors, posts } from "../../constants";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import SectionsBracker from "../../components/SectionsBracker";

const AuthorCard = ({ authorId }) => {
  const authorFeaturedPosts = authors[authorId].featuredPosts;

  return (
    <section
      className={`${styles.mainGlassmorphism} flex flex-col items-center gap-10 p-6 sm:flex-row sm:gap-20`}
    >
      <div className="flex flex-col gap-2 sm:w-[40%]">
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
              <Link to={`/authors/${authorId}`}>{authors[authorId].name}</Link>
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
          <Button title={"Profile"} size={"sm"} link={`/authors/${authorId}`} />
        </div>
      </div>

      {/* <SectionsBracker rotation={"vertical"} className={"my-0"} /> */}

      <div className="flex flex-col gap-2 sm:w-[60%]">
        {authorFeaturedPosts.map((postId, index) => (
          <div
            key={postId}
            className={`flex items-center justify-between gap-2`}
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
    </section>
  );
};

export default AuthorCard;

import { posts } from "../../constants";
import styles from "../../styles";

const Content = ({ postId }) => {
  return (
    <article className={`${styles.mainGlassmorphism} p-6`}>
      <h1 className={`${styles.heading1}`}>{posts[postId].title}</h1>
      <div className="flex gap-2">
        <p className={`${styles.smText}`}>{posts[postId].date}</p>
        <p className={`${styles.smText}`}>•</p>
        <p className={`${styles.smText}`}>
          {posts[postId].readingEstimatedTime}
        </p>
      </div>

      <div className={`my-6`}>
        <img
          className={`${styles.imageStyles}`}
          src={posts[postId].image}
          alt={posts[postId].imageAlt}
        />
      </div>

      <div className="mb-9 sm:mb-10">
        {posts[postId].intro.map((paragraph, index) => (
          <p
            key={index}
            className={`${styles.postParagraph} ${index !== posts[postId].intro.length - 1 ? "mb-8 sm:mb-9" : ""}`}
          >
            {paragraph}
          </p>
        ))}
      </div>

      {posts[postId].sections.map((section, index) => (
        <div
          key={section.id}
          className={`${posts[postId].sections - 1 !== index ? "mb-9 sm:mb-10" : ""}`}
        >
          <h2 className={`${styles.heading2} `}>{section.title}</h2>
          <div className={`${styles.postSubTitleSectionStyles}`}></div>
          {section.content.map((paragraph, index) => (
            <p
              key={index}
              className={`${styles.postParagraph} ${index !== section.content.length - 1 ? "mb-8 sm:mb-9" : ""}`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      ))}
    </article>
  );
};

export default Content;

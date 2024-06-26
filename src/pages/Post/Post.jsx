import styles from "../../styles";
import AuthorHeader from "./AuthorHeader";
import Content from "./Content";
import AuthorCard from "./AuthorCard";
import PostsRecommendations from "./PostsRecommendations";
import { useParams } from "react-router-dom";
import { posts } from "../../constants";

const Post = () => {
  const params = useParams();
  let postId = params.postId;
  let authorId = posts[postId].author;

  return (
    <main
      id="post"
      className={`${styles.boxWidth} my-6 grid gap-4 md:grid-cols-[2fr_1fr] md:grid-rows-[1fr_max-content]`}
    >
      <div className="flex flex-col gap-4">
        <AuthorHeader authorId={authorId} />
        <Content postId={postId} />
        <PostsRecommendations authorId={authorId} />
      </div>
      <AuthorCard authorId={authorId} />
    </main>
  );
};

export default Post;

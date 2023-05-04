import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlice";
import React from "react";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";

export default function PostsList() {
  const posts = useSelector(selectAllPosts);
  const orderPosts = posts.slice().sort((a, b) => (a.date > b.date ? -1 : 1));
  const renderedPosts = orderPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}...</p>
      <p className="postCredit`">
        <PostAuthor userId={post.userId} />
        <TimeAgo timeStamp={post.date} />
      </p>
      <ReactionButton post={post} />
    </article>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
}

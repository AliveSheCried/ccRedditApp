import React from "react";
import { PostMeta } from "./PostMeta";

export const PostContent = ({ title, author, date, comments, image }) => {
  const postImage = image ? (
    <div className="post__img">
      <img src={image} alt="" className="post__img--dim" />
    </div>
  ) : null;

  return (
    <div class="post__content">
      <h3>{title}</h3>
      {postImage && postImage}
      <PostMeta author={author} date={date} comments={comments} />
    </div>
  );
};

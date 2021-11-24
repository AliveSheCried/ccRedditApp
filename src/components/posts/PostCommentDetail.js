import React from "react";
import { fromUnixTime, formatRelative } from "date-fns";

export const PostCommentDetail = ({ author, created, body }) => {
  const timeDate = formatRelative(
    fromUnixTime(created),
    new Date()
  ).toLocaleString();

  //console.log(author, created);
  return (
    <div className="post__comment">
      <div className="post__comment-meta">
        <p className="post__comment-auth">{author}</p>
        <p className="post__comment-created">{timeDate}</p>
      </div>
      <p className="post__comment-text">{body}</p>
    </div>
  );
};

import React from "react";
import { convertUTCTimeToRelative } from "../../lib/convert-time";

export const PostCommentDetail = ({ author, created, body }) => {
  const timeDate = convertUTCTimeToRelative(created);
  return (
    <div className="post__comment">
      <div className="post__comment-meta">
        <p className="post__comment-auth">{author}</p>
        <p className="post__comment-created">{timeDate} ago</p>
      </div>
      <p className="post__comment-text">{body}</p>
    </div>
  );
};

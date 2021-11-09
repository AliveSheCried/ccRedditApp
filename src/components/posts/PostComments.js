import React from "react";

export const PostComments = ({ permaLink }) => {
  return (
    <div className="post__comment">
      <div className="post__comment-meta">
        <p className="post__comment-auth">tT</p>
        <p className="post__comment-created">7 hours ago</p>
      </div>
      <p className="post__comment-text">
        Hey! This was at my tribes powwow! pawnee veterans memorial powwow!
      </p>
    </div>
  );
};

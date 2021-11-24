import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonComments = () => {
  return (
    <div className="post__comment">
      <div className="post__comment-meta">
        <p className="post__comment-auth">
          <Skeleton width={75} height={16} />
        </p>
        <p className="post__comment-created">
          <Skeleton width={35} height={16} />
        </p>
      </div>
      <p className="post__comment-text">
        <Skeleton width={"100%"} height={50} />
      </p>
    </div>
  );
};

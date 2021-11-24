import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonPost = () => {
  return (
    <div className="card__post">
      <div className="post__votes">
        <Skeleton circle={true} height={25} width={25} inline={false} />
        <Skeleton width={16} height={16} />
        <Skeleton circle={true} height={25} width={25} inline={false} />
      </div>
      <div className="post__content">
        <h3>
          <Skeleton />
        </h3>
        <div className="post__details">
          <span className="post__details-name">
            <Skeleton width={75} height={16} />
          </span>
          <span className="post__details-hours">
            <Skeleton width={30} height={16} />
          </span>
          <span className="post__details-container">
            <Skeleton width={16} height={16} />
          </span>
        </div>
      </div>
    </div>
  );
};

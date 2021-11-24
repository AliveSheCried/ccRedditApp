import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const SkeletonSubReddit = () => {
  return (
    <aside>
      <div className="card">
        <h2>
          <Skeleton width={180} />
        </h2>

        <ul className="sublist">
          {Array(10)
            .fill()
            .map((sub, index) => (
              <li className="sublist__item--unselected" key={index}>
                <Skeleton circle={true} height={25} width={25} inline={true} />
                <span className="sublist__text">
                  <Skeleton height={16} width={100} />
                </span>
              </li>
            ))}
        </ul>
      </div>
    </aside>
  );
};

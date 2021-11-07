import React from "react";

export const PostTicks = ({ score }) => {
  let scoreTotal;
  if (score / 1000 > 1) {
    scoreTotal = `${(score / 1000).toFixed(1)}k`;
  } else {
    scoreTotal = score;
  }

  return (
    <div className="post__votes">
      <button type="button" className="post__vote-up" aria-label="Up vote">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="post__icon"
        >
          <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
        </svg>
      </button>
      <p className="post__vote-count">{scoreTotal}</p>
      <button type="button" className="post__vote-down" aria-label="Down vote">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="post__icon"
        >
          <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
        </svg>
      </button>
    </div>
  );
};

import React, { useState } from "react";

export const PostTicks = ({ score }) => {
  const [upVote, setUpVote] = useState(null);
  const [downVote, setDownVote] = useState(null);

  let scoreTotal;
  if (score / 1000 > 1) {
    scoreTotal = `${(score / 1000).toFixed(1)}k`;
  } else {
    scoreTotal = score;
  }

  const handleVoteUp = () => {
    setUpVote(true);
    setDownVote(false);
  };

  const handleVoteDown = () => {
    setDownVote(true);
    setUpVote(false);
  };

  return (
    <div className="post__votes">
      <button
        type="button"
        className={upVote ? "post__vote-upVoted" : "post__vote-up"}
        aria-label="Up vote"
        onClick={handleVoteUp}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="post__icon"
        >
          <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
        </svg>
      </button>
      <p
        className={
          upVote
            ? "post__vote-countIncreased"
            : downVote
            ? "post__vote-countDecreased"
            : "post__vote-count"
        }
      >
        {scoreTotal}
      </p>
      <button
        type="button"
        className={downVote ? "post__vote-downVoted" : "post__vote-down"}
        aria-label="Down vote"
        onClick={handleVoteDown}
      >
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

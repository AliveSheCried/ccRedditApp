import React, { useState } from "react";
import { svgDownTick, svgUpTick } from "../../lib/svg";
import shortenNumber from "../../lib/shortenNumber";

export const PostTicks = ({ score }) => {
  const [upVote, setUpVote] = useState(null);
  const [downVote, setDownVote] = useState(null);

  let scoreTotal = shortenNumber(score, 1);

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
        {svgUpTick}
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
        {svgDownTick}
      </button>
    </div>
  );
};

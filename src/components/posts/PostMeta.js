import React, { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import { PostComments } from "./PostComments";
import { setPermaLink, resetComments } from "../../features/comments-slice";
import { svgComment } from "../../lib/svg";
import shortenNumber from "../../lib/shortenNumber";

export const PostMeta = ({ author, date, comments, permaLink }) => {
  const dispatch = useDispatch();
  const [showComments, setShowComments] = useState(false);

  const handleShowComments = (event) => {
    event.preventDefault();
    setShowComments(!showComments);
    dispatch(resetComments());
    dispatch(setPermaLink(permaLink));
  };

  let commentsTotal = shortenNumber(comments, 1);

  return (
    <Fragment>
      <div className="post__details">
        <span className="post__details-name">{author}</span>
        <span className="post__details-hours">{date}</span>
        <span className="post__details-container">
          <button
            className="post__details-view"
            aria-label="Show comments"
            onClick={handleShowComments}
          >
            {svgComment}
          </button>
          {commentsTotal}
        </span>
      </div>
      {showComments && <PostComments />}
    </Fragment>
  );
};

import React from "react";
import { convertUTCTimeToRelative } from "../../lib/convert-time";
import { PostContent } from "./PostContent";
import { PostTicks } from "./PostTicks";

export const PostDetail = ({
  score,
  author,
  comments,
  createdDate,
  title,
  image,
  permaLink,
  id,
}) => {
  ////convert utc time to relative date
  const date = convertUTCTimeToRelative(createdDate);

  return (
    <div className="card__post">
      <PostTicks score={score} />
      <PostContent
        author={author}
        date={date}
        comments={comments}
        title={title}
        image={image}
        permaLink={permaLink}
      />
    </div>
  );
};

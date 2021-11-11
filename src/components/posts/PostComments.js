import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  commentsSelector,
  permaLinkSelector,
  getComments,
} from "../../features/comments-slice";
import { PostCommentDetail } from "./PostCommentDetail";

export const PostComments = () => {
  const dispatch = useDispatch();
  const commentsLink = useSelector(permaLinkSelector);
  const comments = useSelector(commentsSelector);

  useEffect(() => {
    dispatch(getComments(commentsLink));
  }, [dispatch, commentsLink]);

  const commmentsList = comments.map((comment) => (
    <PostCommentDetail
      key={comment.id}
      created={comment.created_utc}
      author={comment.author}
      body={comment.body}
    />
  ));

  return <div>{commmentsList}</div>;
};

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  commentsSelector,
  permaLinkSelector,
  isLoadingSelector,
  getComments,
  isErrorSelector,
} from "../../features/comments-slice";
import { PostCommentDetail } from "./PostCommentDetail";
import { IsLoading } from "../ui/IsLoading";
import { Error } from "../ui/Error";

export const PostComments = () => {
  const dispatch = useDispatch();
  const commentsLink = useSelector(permaLinkSelector);
  const comments = useSelector(commentsSelector);
  const isLoading = useSelector(isLoadingSelector);
  const isError = useSelector(isErrorSelector);

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

  return (
    <div>
      {isLoading && <IsLoading />}
      {isError && <Error type="error" />}
      {commmentsList}
    </div>
  );
};

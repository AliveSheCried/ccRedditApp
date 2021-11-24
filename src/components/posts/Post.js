import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearSearch,
  getPostData,
  isErrorSelector,
  isLoadingSelector,
  postSelector,
  searchSelector,
  subRedditSelector,
} from "../../features/posts-slice";
import { Error } from "../ui/Error";
import { SkeletonPost } from "../ui/SkeletonPost";
import { PostDetail } from "./PostDetail";

export const Post = () => {
  const dispatch = useDispatch();
  const posts = useSelector(postSelector);
  const subReddit = useSelector(subRedditSelector);
  const search = useSelector(searchSelector);
  const isLoading = useSelector(isLoadingSelector);
  const isError = useSelector(isErrorSelector);

  useEffect(() => {
    dispatch(getPostData(subReddit));
    dispatch(clearSearch());
  }, [dispatch, subReddit]);

  const postList = posts
    .filter((post) => post.title.toLowerCase().includes(search))
    .map((post) => (
      <PostDetail
        author={post.author}
        title={post.title}
        score={post.score}
        createdDate={post.created_utc}
        comments={post.num_comments}
        image={post.url}
        key={post.id}
        id={post.id}
        permaLink={post.permalink}
      />
    ));

  return (
    <article>
      <div className="post">
        {isLoading && <SkeletonPost />}
        {isError && <Error type="error" />}
        {!postList && <Error type="noData" />}
        {postList}
      </div>
    </article>
  );
};

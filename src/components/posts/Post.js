import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  postSelector,
  getPostData,
  subRedditSelector,
  searchSelector,
  isLoadingSelector,
  isErrorSelector,
  clearSearch,
} from "../../features/posts-slice";
import { PostDetail } from "./PostDetail";
import { IsLoading } from "../ui/IsLoading";
import { Error } from "../ui/Error";

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
    .filter((post) => post.title.includes(search))
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
    <main>
      <article>
        <div className="post">
          {isLoading && <IsLoading />}
          {isError && <Error type="error" />}
          {!postList && <Error type="noData" />}
          {postList}
        </div>
      </article>
    </main>
  );
};

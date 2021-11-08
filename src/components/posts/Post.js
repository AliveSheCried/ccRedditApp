import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  postSelector,
  getPostData,
  subRedditSelector,
  searchSelector,
  clearSearch,
} from "../../features/posts-slice";
import { PostDetail } from "./PostDetail";

export const Post = () => {
  const dispatch = useDispatch();
  const posts = useSelector(postSelector);
  const subReddit = useSelector(subRedditSelector);
  const search = useSelector(searchSelector);

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
      />
    ));

  return (
    <main>
      <article>
        <div className="post">{postList}</div>
      </article>
    </main>
  );
};

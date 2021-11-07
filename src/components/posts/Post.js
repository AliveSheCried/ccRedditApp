import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  postSelector,
  getPostData,
  subRedditSelector,
} from "../../features/posts-slice";
import { PostDetail } from "./PostDetail";

export const Post = () => {
  const dispatch = useDispatch();
  const posts = useSelector(postSelector);
  const subReddit = useSelector(subRedditSelector);

  useEffect(() => {
    dispatch(getPostData(subReddit));
  }, [dispatch, subReddit]);

  const postList = posts.map((post) => (
    <PostDetail
      author={post.author}
      title={post.title}
      score={post.score}
      createdDate={post.created_utc}
      comments={post.num_comments}
      image={post.url}
    />
  ));

  console.log(posts);
  return (
    <main>
      <article>
        <div className="post">{postList}</div>
      </article>
    </main>
  );
};

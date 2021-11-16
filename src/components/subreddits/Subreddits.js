import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  subRedditSelector,
  subRedditLoadingSelector,
  getSubRedditData,
  isErrorSelector,
} from "../../features/subReddit-slice";
import { setSubReddit } from "../../features/posts-slice";
import { IsLoading } from "../ui/IsLoading";
import { Error } from "../ui/Error";

export const Subreddits = () => {
  const dispatch = useDispatch();
  const subReddits = useSelector(subRedditSelector);
  const isLoading = useSelector(subRedditLoadingSelector);
  const isError = useSelector(isErrorSelector);

  useEffect(() => {
    dispatch(getSubRedditData());
  }, [dispatch]);

  return (
    <aside>
      <div className="card">
        <h2>Subreddits</h2>
        {isLoading && <IsLoading />}
        {isError && <Error type="error" />}
        <ul className="sublist">
          {subReddits.map((sub) => (
            <li className="sublist__item--unselected" key={sub.id}>
              <button
                type="button"
                onClick={() => dispatch(setSubReddit(sub.url))}
              >
                <img
                  src={
                    sub.icon_img ||
                    `https://api.adorable.io/avatars/25/${sub.display_name}`
                  }
                  alt={sub.display_name}
                  className="sublist__img"
                  style={{ border: `4px solid ${sub.primary_color}` }}
                  url={sub.url}
                />
                <span className="sublist__text">{sub.display_name}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

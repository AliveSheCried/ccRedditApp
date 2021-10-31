import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  subRedditSelector,
  getSubRedditData,
} from "../../features/subReddit-slice";

export const Subreddits = () => {
  const dispatch = useDispatch();
  const subReddits = useSelector(subRedditSelector);

  useEffect(() => {
    dispatch(getSubRedditData());
  }, [dispatch]);

  console.log(subReddits);

  return (
    <aside>
      <div className="card">
        <h2>Subreddits</h2>
        <ul className="sublist">
          {subReddits.map((sub) => (
            <li className="sublist__item--unselected" key={sub.id}>
              <button type="button" style={{ border: `1px solid #000` }}>
                <img
                  src={
                    sub.icon_img ||
                    `https://api.adorable.io/avatars/25/${sub.display_name}`
                  }
                  alt={sub.display_name}
                  className="sublist__img"
                  style={{ border: `4px solid ${sub.primary_color}` }}
                />
                <span style={{ border: `1px solid #000` }}>
                  {sub.display_name}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

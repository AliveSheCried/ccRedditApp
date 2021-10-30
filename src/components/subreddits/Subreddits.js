import React from "react";

export const Subreddits = () => {
  return (
    <aside>
      <div class="card">
        <h2>Subreddits</h2>
        <ul class="sublist">
          <li class="sublist__item--selected">
            <button type="button">Home</button>
          </li>
          <li class="sublist__item--unselected">
            <button type="button">Next item</button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

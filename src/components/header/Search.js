import React from "react";

export const Search = () => {
  return (
    <div className="search">
      <div className="search__form">
        <form action="#">
          <input
            type="text"
            placeholder="Search"
            className="search__input"
            aria-label="Search posts"
          />
          <button className="search__button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="search__icon"
            >
              <path d="M21.172 24l-7.387-7.387c-1.388.874-3.024 1.387-4.785 1.387-4.971 0-9-4.029-9-9s4.029-9 9-9 9 4.029 9 9c0 1.761-.514 3.398-1.387 4.785l7.387 7.387-2.828 2.828zm-12.172-8c3.859 0 7-3.14 7-7s-3.141-7-7-7-7 3.14-7 7 3.141 7 7 7z" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};
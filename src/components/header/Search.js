import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../features/posts-slice";
import { svgSearch } from "../../lib/svg";

export const Search = () => {
  const dispatch = useDispatch();
  const searchTerm = useRef();

  const handleSearch = (event) => {
    event.preventDefault();

    const search = searchTerm.current.value.toLowerCase();
    searchTerm.current.value = "";
    dispatch(setSearch(search));
  };

  return (
    <div className="search">
      <div className="search__form">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search"
            className="search__input"
            aria-label="Search posts"
            ref={searchTerm}
          />
          <button className="search__button" type="submit">
            {svgSearch}
          </button>
        </form>
      </div>
    </div>
  );
};

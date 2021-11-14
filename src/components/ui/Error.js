import React from "react";

export const Error = ({ type }) => {
  let content;
  if (type === "error") {
    content = "An error has occured. Do stuff.";
  } else if (type === "noData") {
    content = "There is content to load";
  }

  return <div className="error">{content}</div>;
};

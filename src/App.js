import React, { Fragment } from "react";
import { Header } from "./components/header/Header";
import { Post } from "./components/posts/Post";
import { Subreddits } from "./components/subreddits/Subreddits";

function App() {
  return (
    <Fragment>
      <Header />
      <Post />
      <Subreddits />
    </Fragment>
  );
}

export default App;

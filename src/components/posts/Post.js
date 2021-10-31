import React from "react";

export const Post = () => {
  return (
    <main>
      <article>
        <div className="card">
          <div className="post">
            <div className="post__votes">
              <button
                type="button"
                className="post__vote-up"
                aria-label="Up vote"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="post__icon"
                >
                  <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z" />
                </svg>
              </button>
              <p className="post__vote-count">89</p>
              <button
                type="button"
                className="post__vote-down"
                aria-label="Down vote"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="post__icon"
                >
                  <path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z" />
                </svg>
              </button>
            </div>
            <div className="post__content">
              <h3>Post title</h3>
              <div className="post__img">
                <img
                  src="./3oheb4mmltu71.jpg"
                  alt="test"
                  className="post__img--dim"
                />
              </div>
              <div className="post__details">
                <span className="post__details-name">poster name</span>
                <span className="post__details-hours">6 hours ago</span>
                <span className="post__details-container">
                  <button
                    className="post__details-view"
                    aria-label="Show comments"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="post__details-icon"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 3c5.514 0 10 3.592 10 8.007 0 4.917-5.144 7.961-9.91 7.961-1.937 0-3.384-.397-4.394-.644-1 .613-1.594 1.037-4.272 1.82.535-1.373.722-2.748.601-4.265-.837-1-2.025-2.4-2.025-4.872 0-4.415 4.486-8.007 10-8.007zm0-2c-6.338 0-12 4.226-12 10.007 0 2.05.739 4.063 2.047 5.625.055 1.83-1.023 4.456-1.993 6.368 2.602-.47 6.301-1.508 7.978-2.536 1.417.345 2.774.503 4.059.503 7.084 0 11.91-4.837 11.91-9.961-.001-5.811-5.702-10.006-12.001-10.006z" />
                    </svg>
                  </button>
                  75
                </span>
              </div>
              <div className="post__comment">
                <div className="post__comment-meta">
                  <p className="post__comment-auth">Spartan2470</p>
                  <p className="post__comment-created">7 hours ago</p>
                </div>
                <p className="post__comment-text">
                  Hey! This was at my tribes powwow! pawnee veterans memorial
                  powwow!
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

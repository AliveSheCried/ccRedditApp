const API = "https://www.reddit.com/";

export const fetchData = async (endPoint) => {
  try {
    const response = await fetch(`${API}${endPoint}.json`);

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const json = await response.json();

    if (endPoint.includes("comments")) {
      return json[1].data.children.map((data) => data.data);
    } else {
      return json.data.children.map((data) => data.data);
    }
  } catch (error) {
    console.log(error);
  }
};

////////Old code where there were 3 requests -> merged into 1 above
// export const fetchSubReddit = async () => {
//   try {
//     const response = await fetch(`${API}subreddits.json`);

//     if (!response.ok) {
//       throw new Error("Subreddit request failed");
//     }

//     const json = await response.json();

//     return json.data.children.map((subReddit) => subReddit.data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const fetchSubRedditPosts = async (url) => {
//   try {
//     const response = await fetch(`${API}${url}.json`);

//     if (!response.ok) {
//       throw new Error("Post request failed");
//     }

//     const json = await response.json();

//     return json.data.children.map((post) => post.data);
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const fetchPostComments = async (permaLink) => {
//   try {
//     const response = await fetch(`${API}${permaLink}.json`);

//     if (!response.ok) {
//       throw new Error("Post request failed");
//     }

//     const json = await response.json();
//     return json[1].data.children.map((comments) => comments.data);
//   } catch (error) {
//     console.log(error);
//   }
// };

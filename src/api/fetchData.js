export const fetchSubReddit = async () => {
  try {
    const response = await fetch("https://www.reddit.com/subreddits.json");

    if (!response.ok) {
      throw new Error("Subreddit request failed");
    }

    const json = await response.json();

    return json.data.children.map((subReddit) => subReddit.data);
  } catch (error) {
    console.log(error);
  }
};

export const fetchSubRedditPosts = async (url) => {
  try {
    const response = await fetch(`https://www.reddit.com${url}.json`);

    if (!response.ok) {
      throw new Error("Post request failed");
    }

    const json = await response.json();

    return json.data.children.map((post) => post.data);
  } catch (error) {
    console.log(error);
  }
};

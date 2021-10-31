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

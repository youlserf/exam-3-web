const baseURL = "https://static.rviewer.io/challenges/datasets/dreadful-cherry-tomatoes/data.json";

export const get = async () => {
  try {
    const response = await fetch(`${baseURL}`);
    return await response.json();
  } catch (error) {
    console.log("error", error);
  }
};
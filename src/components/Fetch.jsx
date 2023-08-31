import axios from 'axios';

const BaseUrl = "https://pixabay.com/api/";
const apiKey = "38368855-bf8c959061acd8b60d5e29ebb";

export const FetchApi = async (searchValue) => {
  const params = new URLSearchParams({
    key: apiKey,
    q: searchValue,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    per_page: 40,
  });

  try {
    const response = await axios.get(`${BaseUrl}?${params}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data from API:", error);
    return null;
  }
};
import axios from 'axios';


axios.defaults.baseURL = "https://pixabay.com/api/";
const apiKey = "38368855-bf8c959061acd8b60d5e29ebb";

export const FetchApi = async (searchValue, page) => {
  const params = new URLSearchParams({
    key: apiKey,
    q : searchValue,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    per_page: 12,
    page: page,
  });
const response = await axios.get(`?${params}`);
    return response.data;

};
import axios from "axios";

const ACCESS_KEY = "5nAhYfgdLBZBbd44An99fi5_47kds_YhXWW6_yj3JZo"
axios.defaults.baseURL = "https://api.unsplash.com"


export const getImages = async (query, currentPage) => {
  const response = await axios.get("/search/photos", { params: { client_id: ACCESS_KEY, query: query, page: currentPage, per_page: 20 } })
  return response.data.results
}
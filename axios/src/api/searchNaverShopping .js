// api/nhnShoppingApi.js
import axios from "axios";

const CLIENT_ID = "SLM8lkvYjNGrwTvPrF5D"; // 네이버 API 클라이언트 ID
const CLIENT_SECRET = "RSZiTLYQpl"; // 네이버 API 클라이언트 시크릿

export const searchNaverShopping = async (query) => {
  const response = await axios.get("/v1/search/shop.json", {
    params: { query },
    headers: {
      "X-Naver-Client-Id": CLIENT_ID,
      "X-Naver-Client-Secret": CLIENT_SECRET,
    },
  });
  return response.data;
};

import { API_TOKEN } from "../config/access/backEnd";

const headers = {
  "Content-Type": "application/json",
  "Accept": "application/json",
  "X-AUTH-TOKEN": API_TOKEN,
};

const getData = async(getUrl) => {
  const response = await fetch(getUrl, {
    method: "GET",
    headers: headers,
  });
  const data = await response.json();
  return data;
};

const postData = async(postUrl, body) => {
  const response = await fetch(postUrl, {
    method: "POST",
    headers: headers,
    body: body,
    // body: JSON.stringify(datos),
  });
  const result = await response.json();
  return result;
};

const apiClient = {
  get: getData,
  post: postData,
};

export default apiClient;

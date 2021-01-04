import { API_TOKEN } from "../config/access/backEnd";

const headers = {
  "Content-Type": "application/json",
  "Accept": "application/json",
  "X-AUTH-TOKEN": API_TOKEN,
};

const get = async(getUrl) => {
  const response = await fetch(getUrl, {
    method: "GET",
    headers: headers,
  });
  const json = await response.json();
  return json;
};

const post = async(postUrl, body) => {
  const response = await fetch(postUrl, {
    method: "POST",
    headers: headers,
    body: body,
    // body: JSON.stringify(datos),
  });
  const json = await response.json();
  return json;
};

const apiClient = {
  get,
  post,
};

export default apiClient;

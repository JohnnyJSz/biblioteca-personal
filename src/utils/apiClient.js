import { API_TOKEN } from "../config/access/backEnd";

const headers = {
  "Content-Type": "application/json",
  "Accept": "application/json",
  "X-AUTH-TOKEN": API_TOKEN,
};

const get = async(url) => {
  const response = await fetch(url, {
    method: "GET",
    headers: headers,
  });
  const json = await response.json();
  return json;
};

const post = async(url, body) => {
  const response = await fetch(url, {
    method: "POST",
    headers: headers,
    body: body,
  });
  const json = await response.json(response);
  return json;
};

const del = async(url) => {
  const response = await fetch(url, {
    method: "DELETE",
    headers: headers,
  });
  const string = await response.text();
  const json = string === "" ? {} : JSON.parse(string);
  return json;
};

const apiClient = {
  get,
  post,
  del,
};

export default apiClient;
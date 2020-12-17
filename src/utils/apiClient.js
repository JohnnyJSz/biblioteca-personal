const getUrl = "https://reqres.in/api/users?page=2";
const postUrl = "https://reqres.in/api/users";

const getData = async(getUrl) => {
  const response = await fetch(getUrl, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
  });
  const data = await response.json();
  const users = data.data;
  return users;
};

let user = {
  name: "Juan Diego",
  job: "Pro Gamer",
};

const postData = async(postUrl, datos) => {
  const response = await fetch(postUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datos),
  });
  const result = await response.json();
  return result;
};

const apiClient = {
  get: getData(getUrl),
  post: postData(postUrl, user),
};

export default apiClient;

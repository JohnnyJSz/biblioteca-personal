// const getUrl = "https://reqres.in/api/users?page=2";

const getData = async(getUrl) => {
  const response = await fetch(getUrl, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
      }
  });
  const data = await response.json();
  return data;
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
  get: getData,
  post: postData,
};

export default apiClient;

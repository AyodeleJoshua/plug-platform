const baseURL = process.env.REACT_APP_BASE_URL;

function getData(url = "") {
  return fetch(baseURL + url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export default getData;
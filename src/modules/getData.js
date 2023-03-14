const apiUrls = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Wl1d9IletOTYVg2sdUf/scores/';

const getData = async () => {
  const response = await fetch(apiUrls, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
};
export { getData, apiUrls };

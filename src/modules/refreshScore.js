/* eslit-disable import/no-cycle */
import { apiUrls } from './getData.js';

const listScores = document.querySelector('.list-scores');
const refreshData = async () => {
  const response = await fetch(apiUrls);
  const data = await response.json();
  listScores.innerHTML = '';
  data.result.forEach((score) => {
    listScores.innerHTML += `
        <li>${score.user} : ${score.score}</li>
    `;
  });
};
export default refreshData;

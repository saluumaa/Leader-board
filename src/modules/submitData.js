/* eslit-disable import/no-cycle */
import { apiUrls } from './getData.js';
import refreshData from './refreshScore.js';

const nameInput = document.getElementById('user');
const scoreInput = document.getElementById('score');

const saveScore = async (event) => {
  event.preventDefault();
  const response = await fetch(apiUrls, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: nameInput.value,
      score: scoreInput.value,
    }),
  });
  const data = await response.json();
  const saveMsg = document.querySelector('.save');
  saveMsg.innerHTML = `${data.result}`;
  setTimeout(() => {
    saveMsg.style.display = 'none';
  }, 2000);
  nameInput.value = '';
  scoreInput.value = '';
  refreshData();
};
export default saveScore;

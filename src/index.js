import './style.css';
import { getData } from './modules/getData.js';
import refreshData from './modules/refreshScore.js';
import saveScore from './modules/submitData.js';

const submitBtn = document.querySelector('.submit');
const refreshbtn = document.querySelector('.refresh');

getData();
document.addEventListener('DOMContentLoaded', refreshData);
refreshbtn.addEventListener('click', refreshData);
submitBtn.addEventListener('click', saveScore);
const scores = [
  {
    name: 'Sumaya',
    result: 100,
  },
  {
    name: 'Samiya',
    result: 70,
  },
  {
    name: 'cali',
    result: 10,
  },
  {
    name: 'cusman',
    result: 20,
  },
  {
    name: 'Mohamed',
    result: 80,
  },
  {
    name: 'Mursal',
    result: 40,
  },
];

const displayData = () => {
  scores.forEach((score) => {
    const tbody = document.querySelector('tbody');
    const rowHolder = document.createElement('div');
    rowHolder.className = 'rowholder';
    rowHolder.innerHTML += `
       <tr>
       <td>${score.name}:</td>
       <td>${score.result}</td>
       </tr>
    `;
    tbody.appendChild(rowHolder);
  });
};
export default displayData;

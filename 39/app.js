const form = document.getElementById('form');
const input = document.getElementById('input');
const valueTwo = document.querySelector('.length_box');

form.addEventListener('submit', (e) => {
  e.preventDefault;
  valueLength = valueTwo.value.length;
  valueTwo.classList.remove(feedback);
  valueTwo.innerHTML = valueLength;
});
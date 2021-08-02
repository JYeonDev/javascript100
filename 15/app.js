const form = document.querySelector('.subform');
const loader = document.querySelector('.loader');
const disappear = document.querySelector('.imgsubmit');

const newSubmit = (e) => {
  e.preventDefault();

  loader.classList.remove('toggle');
  setTimeout(() => {
    disappear.classList.remove('disappear');
    loader.classList.add('toggle');
  }, 3000);

  document.getElementById('name_value').value = document.getElementById('name').innerText;
}

form.addEventListener('submit', newSubmit);
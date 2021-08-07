const disappear = document.getElementById('beginStarting');
const appear = document.querySelector('.toggle_two')
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
  disappear.classList.add('toggle_first')
  appear.classList.remove('toggle_two')

})

console.log(window.innerHeight, window.innerWidth)
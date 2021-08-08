const disappear = document.getElementById('beginStarting');
const appear = document.querySelector('.toggle_two')
const btn = document.querySelector('.btn');
const circle = document.querySelector('.circle');
const colors = ['red', 'black', 'green', 'yellow', 'purple', 'orange', 'pink']

btn.addEventListener('click', () => {
  disappear.classList.add('toggle_first')
  setInterval(() => {
    appear.classList.remove('toggle_two')
  circle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
  }, Math.floor(Math.random() * 2000));
})

console.log(window.innerHeight + 'px', window.innerWidth + 'px')
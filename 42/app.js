const btn = document.getElementById('btn');
const box = document.querySelector('.box');
const colors = ['blue', 'red', 'blue', 'green', 'purple'];


btn.addEventListener('click', () => {
  let random = colors[Math.floor(Math.random() * colors.length)]
  box.style.backgroundColor = random;
});

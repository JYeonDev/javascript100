const btn = document.querySelectorAll('.btn');
const img = document.querySelector('.main_image');

btn.forEach(button => {
  button.addEventListener('click', (e) => {
    let count = 1;
    if(e.target.id === 'arrow-left') {
      img.setAttribute('src', `./images/image${count}.png`);
      count++;
    }
  })
})

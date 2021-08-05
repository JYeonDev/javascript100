const btn = document.querySelectorAll('.btn');
const img = document.querySelector('.main_image');


let count = 1;
btn.forEach(button => {
  button.addEventListener('click', (e) => {
    if(e.target.id === 'arrow-left') {
      img.setAttribute('src', `./images/image${count}.png`);
      count--;     
      if(count === 0) {
        count = 4;
      }
    } else if (e.target.id === 'arrow-right') {
      img.setAttribute('src', `./images/image${count}.png`);
      count++;
      if (count === 5) {
        count = 1;
      }
    }
  })
})
const body = document.body;
const changeButton = document.querySelectorAll('.circle');
const colors = ['gray', '#fff', 'blue', 'yellow'];

changeButton.forEach(button => {
  button.addEventListener('click', () => {
    const contain = (circle) => {
      button.classList.contains(circle)
    }
    if(contain(circle1)) {
      body.style.backgroundColor = colors[0];      
    } else if(contain(circle2)) {
      body.style.backgroundColor = colors[1];
    } else if(contain(circle3)) {
      body.style.backgroundColor = colors[2];
    } else if(contain(circle4)) {
      body.style.backgroundColor = colors[3];
    }
  })
});
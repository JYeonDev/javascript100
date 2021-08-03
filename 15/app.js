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
  const name = document.getElementById('name');
  const course = document.getElementById('course');
  const teacher = document.getElementById('teacher');
  name.innerHTML = document.getElementById('name_value').value;
  course.innerHTML = document.getElementById('course_value').value;
  teacher.innerHTML = document.getElementById('teacher_value').value;
  document.getElementById('name_value').value = '';
  document.getElementById('course_value').value = '';
  document.getElementById('teacher_value').value = '';

  const div = document.createElement('div');
  div.classList.add('imgsubmit', 'disappear');
  div.innerHTML = `
    <img src="./image/person1.png" alt="제출서류">
    <div>
      <span class="common yellow">성함 : </span><span id="name">${name.innerHTML}</span>
    </div>
    <div>
      <span class="common green">코스 : </span><span id="course">${course.innerHTML}</span>
    </div>
    <div>
      <span class="common red">강사 : </span><span id="teacher">${teacher.innerHTML}</span>
    </div>
  `
}

form.addEventListener('submit', newSubmit);
// Scale photo
// =====================================
let photoRef = document.getElementById('ihorPhoto');

function photoToggleClass() {
  photoRef.classList.toggle('ihor-photo-2');
}

photoRef.addEventListener('click', photoToggleClass);

// Scroll
// =====================================
let titleRef = document.querySelectorAll('.section-title');
let letterArr = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i < titleRef.length; i++) {
  const sectionLetter = document.createElement('span');
  sectionLetter.classList.add('span-section-letter', `span-${i}`);
  sectionLetter.textContent = letterArr[i].toUpperCase();

  const space = document.createElement('span');
  space.textContent = ' ';

  titleRef[i].prepend(space);
  titleRef[i].prepend(sectionLetter);
}

function keyDownScroll() {
  let lettersArr = [];
  const lettersRefs = document.querySelectorAll('.span-section-letter');

  lettersRefs.forEach((element) => {
    lettersArr.push(element.textContent);
  });

  for (let i = 0; i < lettersRefs.length; i++) {
    if (event.key.toUpperCase() === lettersArr[i]) {
      lettersRefs[i].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
}

document.body.addEventListener('keydown', keyDownScroll);
// =====================================

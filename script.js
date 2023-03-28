// =====================================
// Photo
// =====================================
const photoRef = document.getElementById('ihorPhoto');

photoRef.addEventListener('click', () => {
  photoRef.classList.toggle('ihor-photo-2');
});

// =====================================
// Scroll
// =====================================
const titleRef = document.querySelectorAll('.section-title');
const letterArr = ['a', 'b', 'c', 'd', 'e'];

for (i = 0; i < titleRef.length; i++) {
  const sectionLetter = document.createElement('span');
  sectionLetter.classList.add('span-section-letter', `span-${i}`);
  sectionLetter.textContent = letterArr[i].toUpperCase();

  const space = document.createElement('span');
  space.textContent = ' ';

  titleRef[i].prepend(space);
  titleRef[i].prepend(sectionLetter);
}

document.body.addEventListener('keydown', (event) => {
  let lettersArr = [];
  const lettersRefs = document.querySelectorAll('.span-section-letter');

  lettersRefs.forEach((element) => {
    lettersArr.push(element.textContent);
  });

  for (i = 0; i < lettersRefs.length; i++) {
    if (event.key.toUpperCase() === lettersArr[i]) {
      lettersRefs[i].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }
});

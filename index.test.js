// HW28
// describe('Photo click test', function () {
//   beforeEach(function () {
//     // Створення тестового середовища
//     document.body.innerHTML = '<img id="ihorPhoto" src="ihor.jpg">';
//   });

//   it('should add ihor-photo-2 class to ihorPhoto when it is clicked', function () {
//     // Отримання посилання на фото
//     var photoRef = document.getElementById('ihorPhoto');
//     // Симулювання кліку на фото
//     photoRef.click();
//     // Перевірка чи встановлений клас ihor-photo-2
//     expect(photoRef.classList.contains('ihor-photo-2')).toBe(true);
//   });

//   it('should remove ihor-photo-2 class from ihorPhoto when it is clicked again', function () {
//     // Отримання посилання на фото
//     var photoRef = document.getElementById('ihorPhoto');
//     // Симулювання двох кліків на фото
//     photoRef.click();
//     photoRef.click();
//     // Перевірка чи видалений клас ihor-photo-2
//     expect(photoRef.classList.contains('ihor-photo-2')).toBe(false);
//   });
// });

describe('test cv', () => {
  const desc = '<p>Photo click test</p>';

  describe(desc, () => {
    it('should add class', () => {
      const photoRef = document.getElementById('ihorPhoto');

      photoRef.click();

      expect(photoRef.classList.contains('ihor-photo-2')).toBe(true);

      // #remove click for next test
      photoRef.click();
    });
  });

  describe(desc, () => {
    it('should remove class', () => {
      const photoRef = document.getElementById('ihorPhoto');

      photoRef.click();
      photoRef.click();

      expect(photoRef.classList.contains('ihor-photo-2')).toBe(false);
    });
  });
});

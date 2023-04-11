// HW30: tests for HW28

describe('test photo', () => {
  const desc1 = '<p>Photo click test</p>';

  describe(desc1, () => {
    it('should add class', () => {
      const photoRef = document.getElementById('ihorPhoto');

      photoRef.click();

      expect(photoRef.classList.contains('ihor-photo-2')).toBe(true);

      // #remove click for next test
      photoRef.click();
    });
  });

  describe(desc1, () => {
    it('should remove class', () => {
      const photoRef = document.getElementById('ihorPhoto');

      photoRef.click();
      photoRef.click();

      expect(photoRef.classList.contains('ihor-photo-2')).toBe(false);
    });
  });
});

describe('test scroll', () => {
  const desc2 = '<p>Check if button was clicked</p>';

  describe(desc2, () => {
    it('should clicked', () => {
      spyOn(window, 'keyDownScroll');
      keyDownScroll();
      expect(keyDownScroll).toHaveBeenCalled();
    });
  });
});

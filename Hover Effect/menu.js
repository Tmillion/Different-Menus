const selectElement = (element) => document.querySelector(element);

selectElement('.main-icon').addEventListener('click', () => { console.log('click')
  selectElement('nav').classList.toggle('active');
});

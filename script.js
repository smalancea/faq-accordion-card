const accordionButton = document.querySelectorAll('.question');
accordionButton.forEach((item) => {
  item.addEventListener('click', (event) => {
    console.log('click');

    if (item.classList.contains('open')) {
    }

    item.classList.toggle('open');
    item.nextElementSibling.classList.toggle('open');
  });
});

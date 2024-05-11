
const image = document.querySelector('img');

// Desfoque inicial
image.style.filter = 'blur(5px)';

// Revelação ao passar o mouse
image.addEventListener('mouseover', function() {
  image.style.filter = 'none';
});

image.addEventListener('mouseout', function() {
  image.style.filter = 'blur(5px)';
});

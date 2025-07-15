document.body.addEventListener('click', function(e) {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = `${e.clientX - 10}px`;
  heart.style.top = `${e.clientY - 10}px`;
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 2000); // Elimina el corazón después de 2 segundos
});

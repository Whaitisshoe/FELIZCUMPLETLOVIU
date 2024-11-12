const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

noBtn.addEventListener('mouseover', function() {
    const randomX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});
// Agregar espacio adicional al final de la página
document.body.style.paddingBottom = '50px';

// Mover el botón "No"
noBtn.addEventListener('mouseover', function() {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    noBtn.
  
style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});

// Mostrar el mensaje cuando se hace clic en "Sí"
yesBtn.addEventListener('click', function() {
    messageContainer.style.display = 'block';  // Mostramos el mensaje
});

// Función para mostrar el mensaje cuando se hace clic en "Sí"
yesBtn.addEventListener('click', function() {
    messageContainer.style.display = 'flex';  // Mostrar el mensaje
    setTimeout(() => {
        messageContainer.style.display = 'none';  // Ocultar el mensaje después de 3 segundos
    }, 3000);
});
   
 // Mueve el botón "No" aleatoriamente cuando pasa el ratón por encima
noBtn.addEventListener('mouseover', function() {
    const randomX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const randomY = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
});

// Cuando se hace clic en el botón "Sí"
yesBtn.addEventListener('click', function() {
    // Mostrar un mensaje
    alert("Viste, tengo razón");

    // Hacer que el botón "No" vuelva a su posición original, asegurándose de no interferir
    noBtn.style.left = '50%';  // Cambiar esto a la posición que prefieras
    noBtn.style.top = '80%';   // Cambiar esto a la posición que prefieras

    // Rehabilitar el movimiento del botón "No"
    noBtn.style.pointerEvents = 'auto'; // Permite la interacción después del click
});

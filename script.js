// Obtener elementos del DOM
const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");

// Definir el valor inicial del contador
let count = 0;

// Actualizar el valor del contador en la página
function updateCounter() {
	counter.innerHTML = count;
}

// Incrementar el valor del contador al hacer clic en el botón correspondiente
incrementBtn.addEventListener("click", function() {
	count++;
	updateCounter();
});

// Decrementar el valor del contador al hacer clic en el botón correspondiente
decrementBtn.addEventListener("click", function() {
	if (count > 0) {
		count--;
		updateCounter();
	}
});

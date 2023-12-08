  function cargarNavbarYFooter() {
    fetch("navbar.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("navbar-container").innerHTML = data;
      });

    fetch("footer.html")
      .then(response => response.text())
      .then(data => {
        document.getElementById("footer-container").innerHTML = data;
      });
  }

  document.addEventListener("DOMContentLoaded", cargarNavbarYFooter);

  const nombreInput = document.getElementById('nombre');
  const apellidoInput = document.getElementById('apellido');
  const correoInput = document.getElementById('correo');
  const cantidadInput = document.getElementById('cantidad');
  const categoriaSelect = document.getElementById('categoria');
  const totalPagar = document.getElementById('total_pagar');
  const borrarBtn = document.getElementById('borrar');

  borrarBtn.addEventListener('click', () => {
    nombreInput.value = '';
    apellidoInput.value = '';
    correoInput.value = '';
    cantidadInput.value = '';
    categoriaSelect.value = '1'; 
    totalPagar.textContent = '';
  });

  const formulario = document.querySelector('form');

  formulario.addEventListener('submit', (event) => {
    event.preventDefault(); 
    if (!formulario.checkValidity()) {
      event.preventDefault(); 
    } else {
      const nombre = nombreInput.value;
      const apellido = apellidoInput.value;
      const correo = correoInput.value;
      const cantidad = parseFloat(cantidadInput.value) || 0;
      const categoria = parseInt(categoriaSelect.value);
      let descuento = 0;

      if (categoria === 1) {
        descuento = 0.8;
      } else if (categoria === 2) {
        descuento = 0.5;
      } else if (categoria === 3) {
        descuento = 0.15;
      }

      const total = cantidad * 200 * (1 - descuento);
      totalPagar.textContent = `$${total.toFixed(2)}`;
    }
  });

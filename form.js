document.getElementById("Formulario").onsubmit = function (event) {
  event.preventDefault();

  const nombre = document.getElementById("usuario").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  const categoria = document.getElementById("categorias").value;
  const telefono = document.getElementById("Telefono").value.trim();

  const resultDiv = document.getElementById("resultado");
  const feedbackDiv = document.getElementById("mensajeFeedback");
  resultDiv.innerHTML = "";
  feedbackDiv.innerHTML = "";

  let errors = [];

  if (!nombre) {
    errors.push("El nombre es obligatorio.");
  } else if (!/^[A-Za-z\s]+$/.test(nombre)) {
    errors.push("El nombre solo puede contener letras y espacios.");
  }

  if (!email) {
    errors.push("El correo es obligatorio.");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push("El correo electrónico no es válido.");
  }

  if (!mensaje) {
    errors.push("El mensaje es obligatorio.");
  }

  if (!categoria) {
    errors.push("Debes seleccionar una categoría.");
  }

  if (!telefono) {
    errors.push("El teléfono es obligatorio.");
  } else if (!/^\d{10}$/.test(telefono)) {
    errors.push("El teléfono debe contener exactamente 10 dígitos.");
  }
  if (errors.length > 0) {
    errors.forEach((error) => {
      const errorElement = document.createElement("p");
      errorElement.textContent = error;
      errorElement.style.color = "red";
      feedbackDiv.appendChild(errorElement);
    });
  } else {
    const dataContainer = document.createElement("div");
    dataContainer.classList.add("feedback");

    dataContainer.innerHTML = `
      <p>Su consulta se ha realizado!</p>
          <p>Nombre: ${nombre}</p>
          <p>Email: ${email}</p>
            <p>Teléfono: ${telefono}</p>
          <p>Mensaje: ${mensaje}</p>
          <p>Categoría: ${categoria}</p>
      `;

    resultDiv.appendChild(dataContainer);
    this.reset();
  }
};

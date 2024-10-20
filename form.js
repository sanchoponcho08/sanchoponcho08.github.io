document.getElementById("registrationForm").onsubmit = function (event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener los valores del formulario
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const category = document.getElementById("category").value;

  // Limpiar el div de resultados
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = ""; // Limpiar contenido anterior

  // Validación de campos
  let errors = [];

  if (!name) {
    errors.push("El nombre es obligatorio.");
  } else if (!/^[A-Za-z\s]+$/.test(name)) {
    errors.push("El nombre solo puede contener letras y espacios.");
  }

  if (!email) {
    errors.push("El correo es obligatorio.");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push("El correo electrónico no es válido.");
  }

  if (!message) {
    errors.push("El mensaje es obligatorio.");
  }

  if (!category) {
    errors.push("Debes seleccionar una categoría.");
  }

  // Mostrar errores o resultados
  if (errors.length > 0) {
    errors.forEach((error) => {
      const errorElement = document.createElement("p");
      errorElement.textContent = error;
      errorElement.style.color = "red"; // Estilo para errores
      resultDiv.appendChild(errorElement);
    });
  } else {
    const nameElement = document.createElement("p");
    const emailElement = document.createElement("p");
    const messageElement = document.createElement("p");
    const categoryElement = document.createElement("p");

    nameElement.textContent = `Nombre: ${name}`;
    emailElement.textContent = `Email: ${email}`;
    messageElement.textContent = `Mensaje: ${message}`;
    categoryElement.textContent = `Categoría: ${category}`;

    resultDiv.appendChild(nameElement);
    resultDiv.appendChild(emailElement);
    resultDiv.appendChild(messageElement);
    resultDiv.appendChild(categoryElement);

    // Limpiar el formulario
    this.reset();
  }
};

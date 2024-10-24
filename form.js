document.getElementById("Formulario").onsubmit = function (event) {
  event.preventDefault();

  const name = document.getElementById("usuario").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("mensaje").value.trim();
  const category = document.getElementById("categorias").value;

  const resultDiv = document.getElementById("result");
  const feedbackDiv = document.getElementById("mensajeFeedback");
  resultDiv.innerHTML = "";
  feedbackDiv.innerHTML = "";

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

  if (errors.length > 0) {
    errors.forEach((error) => {
      const errorElement = document.createElement("p");
      errorElement.textContent = error;
      errorElement.style.color = "red";
      feedbackDiv.appendChild(errorElement);
    });
  } else {
    // Crear un contenedor para los datos que se va a mostrar
    const dataContainer = document.createElement("div");
    dataContainer.classList.add("feedback"); // Clase que ya tienes en CSS

    // Añadir los datos al contenedor
    dataContainer.innerHTML = `
      <p>Su consulta se ha realizado!</p>
          <p>Nombre: ${name}</p>
          <p>Email: ${email}</p>
          <p>Mensaje: ${message}</p>
          <p>Categoría: ${category}</p>
      `;

    // Añadir el contenedor con los datos al div resultDiv
    resultDiv.appendChild(dataContainer);
    this.reset();
  }
};

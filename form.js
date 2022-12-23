// Obtener el formulario
const form = document.querySelector("#formulario");

// Manejador del envío del formulario
form.addEventListener("submit", (event) => {
  // Evitar la recarga de la página
  event.preventDefault();

  // Obtener los datos del formulario
  const name = form.name.value;
  const surname = form.surname.value;
  const email = form.email.value;
  const cif = form.cif.value;
  const phone = form.phone.value;
  const webSencilla = form.webSencilla.value;
  const webConTienda = form.webConTienda.value;
  const motorReservas = form.motorReservas.value;
  const app = form.app.value;

  /* const contraseña = form.contraseña.value; */

  // Validar los datos (opcional)
  if (!name || !surname || !email || !cif || !phone) {
    alert("Por favor, rellena todos los campos");
    return;
  }

  // Crear un nuevo usuario
  const $mockData = {
    name,
    surname,
    email,
    cif,
    phone,
    webConTienda,
    webSencilla,
    motorReservas,
    app
  };

  // Enviar los datos al endpoint
  fetch("https://63a4a889821953d4f2ba7173.mockapi.io/api/v1/Orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify($mockData),
  })
    .then((response) => {
      // Mostrar un mensaje de éxito o de error
      if (response.ok) {
        alert("Usuario creado con éxito");
      } else {
        alert("Error al crear el usuario");
      }
    })
    .catch((error) => {
      console.error(error);
      alert("Error al enviar los datos");
    });
});

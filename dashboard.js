// Realizar solicitud HTTP para obtener los pedidos
fetch("https://63a4a889821953d4f2ba7173.mockapi.io/api/v1/Orders")
  .then((response) => response.json())
  .then((orders) => {
    // Obtener la tabla del dashboard
    const table = document.querySelector("table");

    // Recorrer cada pedido
    orders.forEach((order) => {
      // Obtener la plantilla de la fila de la tabla
      const template = document.querySelector("#template");

      // Clonar la plantilla
      const row = template.content.cloneNode(true);

      // Reemplazar los datos de la plantilla con los datos del pedido
      row.querySelector("td:nth-of-type(1)").textContent = order.name;
      row.querySelector("td:nth-of-type(2)").textContent = order.surname;
      row.querySelector("td:nth-of-type(3)").textContent = order.email;
      row.querySelector("td:nth-of-type(4)").textContent = order.cif;
      row.querySelector("td:nth-of-type(5)").textContent = order.phone;
      row.querySelector("td:nth-of-type(6)").textContent = order.followUp
        ? "Sí"
        : "No";
      row.querySelector("td:nth-of-type(7)").textContent = order.webSencilla
        ? "Sí"
        : "No";
      row.querySelector("td:nth-of-type(8)").textContent = order.webConTienda
        ? "Sí"
        : "No";
      row.querySelector("td:nth-of-type(9)").textContent = order.reservas
        ? "Sí"
        : "No";

      table.appendChild(row);
    });
  });

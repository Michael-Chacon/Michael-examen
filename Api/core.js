const URL = "http://154.38.171.54:3001/priceJ";

const CABECERA = new Headers({
  "Content-Type": "application/json",
});

async function getData() {
  const consulta = await fetch(`${URL}`);
  const respuesta = await consulta.json();
  return respuesta
}


function postData(datos) {
  fetch(`${URL}`, {
    method: "POST",
    headers: CABECERA,
    body: JSON.stringify(datos),
  });
}

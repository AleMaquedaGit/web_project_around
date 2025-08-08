class Api {
  constructor(options) {
    //en los parentesis solo van parametros (solo para el constructor)
    this.baseUrl = options.baseUrl; //dentro de las llaves registramos las propiedades que se utilizaran a lo largo de la clase
    this.headers = options.headers;
  }

  getInitialCards() {
    return fetch(this.baseUrl + "/cards/", {
      method: "GET",
      //llamando a la API .Para llamar propiedades del constructor es a travez de"this"
      headers: this.headers,
    }).then((response) => {
      if (response.ok) {
        return response.json(); //es un metodo
      }
      throw new Error("Error en la base de datos");
    });
  }
  addCard({ name, link }) {
    fetch(this.baseUrl + "/cards/", {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({ name, link }),
    }).then((response) => {
      if (response.ok) {
        return response.json(); //es un metodo
      }
    });
  }

  // otros métodos para trabajar con la API
}
export default Api;
//":" Cuando es un objeto , los objetos siempre se escriben con una llave
// "=" Cuando se trabaja con una constante.
// "." Acceder a la variable o llave del objeto.

// fetch , then para conectarse a la api
// await : sirve para hacer algo despues de esperar los datos

//GET:traer datos,
// POST:subir datos nuevo a la nube,(una nueca tarjeta)
// PUSH:actualizacion completa
// PATCH :actualizar informacion(solo una cosa de la tarjeta)
// DELETE: borrar información

//descargar easy highlight

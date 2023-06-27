const crearSede = (data) => {
    const { idSede,nombre,direccion,fechaCreacion,codigoPostal,idPais } = data;
    return fetch("http://localhost:8094/rest/general/registrar-sede", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({ idSede,nombre,direccion,fechaCreacion,codigoPostal,idPais }),
    });
}
export const sedesServices = {
    crearSede
}
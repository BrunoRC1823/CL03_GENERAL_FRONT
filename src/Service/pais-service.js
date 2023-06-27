
const listaCategorias = async () => {
    try {
        return await fetch("http://localhost:8091/rest/pais").then((respuesta) => respuesta.json());
    } catch (e) {
        alert('Ocurrio un error! ' + e)
    }
}

export const paisesServices = {
    listaCategorias,
}
import { number, object, string } from "yup"

export const nuevoVideoSchema = object({
    idSede: number().nullable()
        .typeError("Ingrese un id").positive("El id solo puede ser numero positivos"),
    nombre: string().required("Ingrese un nombre").min(2, "El nombre debe tener al menos 2 caracteres.").max(45, "El titulo debe tener máximo 45 caracteres.")
        .matches(/^(?:[a-zA-Z0-9!"'():,.;¿¡áéíóúÁÉÍÓÚüÜñÑ-]+(?:\s{1}[a-zA-Z0-9!"'():,.;¿¡áéíóúÁÉÍÓ ÚüÜñÑ-]+)*)?$/, "Formato incorrecto"),
    direccion: string().required("Ingrese una direccion").min(10, "La direccion debe tener al menos 10 caracteres"),
    fechaCreacion: string().required("Ingrese una fecha")
        .test("fecha-creacion", "La fecha de creación no puede ser mayor a la fecha actual", function (value) {
            const fechaCreacion = new Date(value);
            const fechaActual = new Date();
            return fechaCreacion <= fechaActual;
        }),
    codigoPostal: string().required("Ingrese un pais"),
    idPais: string().required("Ingrese una contraseña"),
});
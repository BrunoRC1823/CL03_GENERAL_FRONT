import { Autocomplete, Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import { nuevoVideoSchema } from "./Validaciones";
import { yupResolver } from "@hookform/resolvers/yup";
import { paisesServices } from "../../Service/pais-service";
import { sedesServices } from "../../Service/sede-service";
import Alertas from "../Alertas/Alertas";
import MiModal from "../MiModal/MiModal";

const paises = await paisesServices.listaCategorias();
const Formulario = () => {
    const [valueSelect, setValueSelect] = useState(null)
    const [valueCate, setValueCate] = useState([])
    useEffect(() => {
    }, [valueCate]);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        mode: "onChange",
        resolver: yupResolver(nuevoVideoSchema),
        defaultValues: {
            idSede: "",
            nombre: "",
            direccion: "",
            fechaCreacion: "",
            codigoPostal: "",
            idPais: "",
        },
    });
    const limpiarInputs = () => {
        reset("");
        setValueSelect("");
    };
    const [open, setOpen] = useState(false);
    const [texto, setTexto] = useState("");
    const [severity, setSeverity] = useState("info");

    const handleOpen = (texto, severity) => {
        setSeverity(severity);
        setTexto(texto);
        setOpen(true);
    };
    const [openModal, setOpenModal] = useState(false);
    const [sedeData, setSedeData] = useState({
    idSede: "",
    nombre: "",
    direccion: "",
    fechaCreacion: "",
    codigoPostal: "",
    pais: ""});
    const almacenarDatos = (data) => {
        sedesServices.crearSede(data)
            .then(async (response) => {
                const responseData = await response.json();
                const { sede, mensaje } = responseData;
                setSedeData(sede);
                handleOpen(mensaje, "success");
                setOpenModal(true);
            }).catch(() => handleOpen("Error al registrar!", "error"));
    }
    return (
        <React.Fragment>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                boxSizing: "border-box",
                padding: "0 25%",
                gap: "1rem"
            }}
                component="form"
                onSubmit={handleSubmit((data) => {
                    const paisSelected = data.idPais;
                    const paisFind = valueCate.find(([_, nombre]) => nombre === paisSelected);
                    if (paisFind) {
                        const [id] = paisFind;
                        data.idPais = id;
                        almacenarDatos(data);
                        limpiarInputs();
                    } else {
                        handleOpen("El pais no existe", "warning");
                    }
                })}
            >
                <TextField
                    label="Codigo"
                    variant="outlined"
                    fullWidth
                    type={"number"}
                    error={!!errors["idSede"]}
                    helperText={errors["idSede"]?.message}
                    {...register("idSede")}
                />
                <TextField
                    label="Nombre"
                    variant="outlined"
                    fullWidth
                    type={"text"}
                    error={!!errors["nombre"]}
                    helperText={errors["nombre"]?.message}
                    {...register("nombre")}
                />
                <TextField
                    label="Direccion"
                    variant="outlined"
                    fullWidth
                    type={"text"}
                    error={!!errors["direccion"]}
                    helperText={errors["direccion"]?.message}
                    {...register("direccion")}
                />
                <TextField
                    label="Fecha de Creacion"
                    variant="outlined"
                    fullWidth
                    type={"date"}
                    error={!!errors["fechaCreacion"]}
                    helperText={errors["fechaCreacion"]?.message}
                    {...register("fechaCreacion")}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    label="Codigo Postal"
                    variant="outlined"
                    fullWidth
                    type={"number"}
                    error={!!errors["codigoPostal"]}
                    helperText={errors["codigoPostal"]?.message}
                    {...register("codigoPostal")}
                />
                <Autocomplete
                    disablePortal
                    options={paises.map((option) => option.nombre)}
                    value={paises.map((option) => option.nombre).includes(valueSelect) ? valueSelect : null}
                    onBlur={({ target }) => {
                        const datos = paises.map((option) => [option.idPais, option.nombre]);
                        setValueCate(datos);
                        setValueSelect(target.value);
                    }}
                    renderInput={(params) =>
                        <TextField {...params}
                            label="Paises"
                            variant="outlined"
                            fullWidth
                            type={"text"}
                            error={!!errors["idPais"]}
                            helperText={errors["idPais"]?.message}
                            {...register("idPais")}
                        />
                    } />
                <Box sx={{
                    display: 'flex',
                    gap: "2rem"
                }}>
                    <Button
                        variant="contained"
                        type="submit"
                    >Registrar
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => { limpiarInputs() }}
                    >Limpiar
                    </Button>
                </Box>
            </Box>
            <Alertas
                open={open}
                setOpen={setOpen}
                texto={texto}
                severity={severity}
            />
            <MiModal 
            openModal={openModal} 
            setOpenModal={setOpenModal} 
            sedeData={sedeData} />
        </React.Fragment>
    )
}
export default Formulario
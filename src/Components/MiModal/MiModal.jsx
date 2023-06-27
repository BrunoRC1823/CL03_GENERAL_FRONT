import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#FBFEF9',
    border: '1px solid #000004',
    boxShadow: 24,
    borderRadius: "15px",
};
const MiModal = (props) => {
    const { openModal, setOpenModal, sedeData } = props;
    const { idSede, nombre, direccion, fechaCreacion, codigoPostal, pais } = sedeData
    const handleCloseModal = () => setOpenModal(false);
    return (
        <Modal
            open={openModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box sx={{ backgroundColor: "#0C6291" ,p:1,borderRadius: "13px 13px 0 0",}}>
                    <Typography id="modal-modal-title" 
                    variant="h6" component="h2" textAlign="center" color="#FBFEF9">
                        Se registro la sede
                    </Typography>
                </Box>
                <Box sx={{ backgroundColor: "#FBFEF9" ,padding:"0 1rem 1rem 1rem",borderRadius: "15px",}}>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }} variant="body1">
                        <p textAlign="center">Codigo de sede: {idSede}</p>
                        <p>Nombre de sede: {nombre}</p>
                        <p>Direccion: {direccion}</p>
                        <p>Fecha de creación: {fechaCreacion}</p>
                        <p>Codigo postal: {codigoPostal}</p>
                        <p>Pais: {pais.nombre}</p>
                    </Typography>
                </Box>
            </Box>
        </Modal>
    )
}

export default MiModal
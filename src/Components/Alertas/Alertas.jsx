import { Alert, Snackbar } from "@mui/material"

const Alertas = (props) =>{
    const {open, setOpen,texto,severity} = props;
    const handleClose = (_, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    return(
        <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
            {texto}
        </Alert>
    </Snackbar>
    )
}
export default Alertas
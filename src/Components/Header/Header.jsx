import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const Header = () =>{
    return (
        <Box component="header" sx={{
            width:"100%",
            bgcolor:"#0C6291",
            boxSizing:"border-box",
            padding:"0.5rem 2rem",
            textAlign:"start",
            boxShadow: "0 0 10px 2px #0C6291",
        }}>
            <Typography variant="h6" color="#FBFEF9">Bruno Rios</Typography>
        </Box>
    )
}
export default Header;
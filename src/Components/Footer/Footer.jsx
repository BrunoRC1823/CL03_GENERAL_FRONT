import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
const Header = () => {
    return (
        <Box component="footer" sx={{
            width: "100%",
            bgcolor: "#0C6291",
            boxSizing: "border-box",
            padding: "0.5rem 2rem",
            textAlign: "center",
            marginTop:"2rem"
        }}>
            <Typography variant="h6" color="#FBFEF9">
                Bruno Daniel Rios Cosser ©2023
                </Typography>
        </Box>
    )
}
export default Header;
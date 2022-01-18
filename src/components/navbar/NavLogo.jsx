import Box from "@mui/material/Box";
import logo from './../../../src/assets/logo.png';

const NavLogo = (props) => {
    return (
        <Box
            component="img"
            alt="Brand Logo"
            src={logo}
        >
        </Box>
    )
};

export default NavLogo;
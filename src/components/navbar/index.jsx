import React from 'react';
import NavItems from "./NavItems";
import NavLogo from "./NavLogo";
import NavIcons from './NavIcons';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

const Navbar = () => {
    const [toggle, setToggle] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setToggle(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setToggle(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box component="div">
                        <NavLogo></NavLogo>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, justifyContent: 'end' }}>
                        <IconButton
                            onClick={handleOpenNavMenu}
                            sx={{ color: "#FFFFFF", fontSize: '30px' }}
                        >
                            <MenuIcon fontSize='inherit' />
                        </IconButton>
                        <Menu
                            anchorEl={toggle}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(toggle)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <NavItems></NavItems>
                            <NavIcons></NavIcons>
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', alignItems: 'center' } }}>
                        <NavItems></NavItems>
                        <NavIcons></NavIcons>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;

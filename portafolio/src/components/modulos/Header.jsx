    import * as React from 'react';
    import AppBar from '@mui/material/AppBar';
    import Box from '@mui/material/Box';
    import Toolbar from '@mui/material/Toolbar';
    import IconButton from '@mui/material/IconButton';
    import Typography from '@mui/material/Typography';
    import Menu from '@mui/material/Menu';
    import MenuIcon from '@mui/icons-material/Menu';
    import Container from '@mui/material/Container';
    import Button from '@mui/material/Button';
    import MenuItem from '@mui/material/MenuItem';
    import { Link } from 'react-router-dom'; // Importa Link
    // segúrate de que la ruta sea correcta

    const pages = [
    { name: 'About Me', path: '' },
    { name: 'Skills', path: '' },
    { name: 'Projects', path: '' },
    { name: 'Recommendations', path: '' },

    ];

   

    function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

   

    return (
        <AppBar position="static" sx={{ background: "#7733FF", fontWeight: "bold" }}>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            {/* Logo en pantallas medianas y grandes */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, alignItems: 'right' }}>
                <p>Alejandra Marin <br /> aleja@gmail.com <br /> 3125678954 </p>
            </Box>

            {/* Menú hamburguesa en dispositivos móviles */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                <MenuIcon />
                </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', md: 'none' } }}
                >
                {pages.map((page) => (
                    <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Link to={page.path} style={{ textDecoration: 'none' }}>
                        <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
                    </Link>
                    </MenuItem>
                ))}
                </Menu>
            </Box>

            {/* Logo en dispositivos móviles */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>

               
            </Box>

            {/* Menú de navegación en pantallas medianas y grandes */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>

                {pages.map((page) => (
                <Button key={page.name} onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                    <Link to={page.path} style={{ textDecoration: 'none', color: 'white' }}>
                    {page.name}
                    </Link>
                </Button>
                ))}
            </Box>

        
            </Toolbar>
        </Container>
        </AppBar>
    );
    }

    export default ResponsiveAppBar;

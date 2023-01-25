import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import logoBETA from '../assets/logoBETA.png';

function ResponsiveAppBar() {
    // const [anchorElNav, setAnchorElNav] = React.useState(null);

    // const navigate = useNavigate();

    // const handleOpenNavMenu = (event) => {
    //     setAnchorElNav(event.currentTarget);
    // };

    // const handleCloseNavMenu = () => {
    //     setAnchorElNav(null);
    // };

    // const handleHomeItem = () => {
    //     navigate('/');
    // };

    return (
        <AppBar position="static" sx={{ background: "#FFFFFF", }} >
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    {/* <Button style={{ fontSize: '20px' }} href="/" sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',

                    }}>

                        Sococal.ai

                    </Button> */}
                    <img style={{ width: 175, height: 35 }} src={logoBETA} alt="Sococal Logo" />
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        {/* <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton> */}
                        {/* <Menu
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
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >

                            <MenuItem onClick={handleHomeItem}>
                                <Typography textAlign="center">Home</Typography>
                            </MenuItem>
                        </Menu> */}
                    </Box>
                    {/* <Button style={{ fontSize: '20px' }} href="/" sx={{
                        mr: 2,
                        display: { xs: 'flex', md: 'none' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',

                    }}>

                        Sococal.ai

                    </Button> */}
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default ResponsiveAppBar;
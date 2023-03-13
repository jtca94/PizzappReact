import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';

import useScrollTrigger from '@mui/material/useScrollTrigger';


import { NavLink } from 'react-router-dom';



const drawerWidth = 240;
const navItems = [{ name: 'Home', path: '/' }, { name: 'pizzas', path: '/pizzas' }, { name: 'cart', path: '/cart' }];

function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);


    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    // drawer para versiones mobile
    const drawer = (
        <Box color='white' onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>


            <IconButton sx={{ textAlign: 'center', mt: 2 }}>
                <LocalPizzaIcon sx={{ color: 'white' }} />
            </IconButton>
            <Typography variant="h6" sx={{ mb: 2 }}>
                Mamma Mia!
            </Typography>

            <Divider />
            <List>
                {navItems.map(({ name, path }) => (

                    <ListItem key={name} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}
                        >
                            <NavLink
                            
                                to={path}
                                style={{ textDecoration: 'none', color: 'white' }}>
                                <ListItemText primary={name} />
                            </NavLink>

                        </ListItemButton>
                    </ListItem>

                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });
                
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar 
                
                sx={{ backgroundColor: trigger ? 'rgba(3, 7, 30, 0.7)' : 'rgb(3, 7, 30)',  transition: '1s', backdropFilter: trigger && 'blur(8px)'  }} component="nav" >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <IconButton sx={{ textAlign: 'center', mr: 2 }}>
                        <LocalPizzaIcon sx={{ color: 'primary.fifth' }} />
                    </IconButton>
                    <Typography
                        variant="h6"

                        component="div"
                        sx={{ flexGrow: 1, display: { sm: 'block' }, color: 'primary.ten' }}
                    >
                        Mamma Mia!
                    </Typography>
                    

                    <Box

                        sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map(({ name, path }) => (

                            <Button
                                sx={{ mx: 2 }}
                                key={name} >

                                <NavLink
                                    className={({isActive}) => isActive ? 'active' : 'inactive'}
                                    style={{ textDecoration: 'none' }}
                                    to={path}
                                >
                                    {name}
                                </NavLink>

                            </Button>

                        ))}
                    </Box>
                </Toolbar>
            </AppBar>

            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: 'primary.eight' },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Toolbar />

        </Box>

    );
}


export default DrawerAppBar;
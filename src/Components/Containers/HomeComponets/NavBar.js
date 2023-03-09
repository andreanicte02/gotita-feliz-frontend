import React from 'react';
import {AppBar, Box, Icon, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InvertColorsIcon from '@mui/icons-material/InvertColors';

const NavBar = ({open,toggle}) => {

    return (
        <AppBar>
            <Toolbar>
                <IconButton onClick={toggle}>
                    <MenuIcon sx={{color: "white"}}/>
                </IconButton>

                <Typography variant="h5" marginLeft={open?21:1} sx={{transition: "marginLeft 1s", color: "white"} }>
                    Gotita Feliz
                </Typography>

                <Icon color="inherit" sx={{marginLeft: "auto", color: "white"}}>
                    <InvertColorsIcon/>
                </Icon>
            </Toolbar>
        </AppBar>
    );
};


export default NavBar;
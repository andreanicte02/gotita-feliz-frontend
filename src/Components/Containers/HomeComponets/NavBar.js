import React from 'react';
import {AppBar, Box, Button, Icon, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InvertColorsSharpIcon from "@mui/icons-material/InvertColorsSharp";

const NavBar = ({open,toggle}) => {
    return (
        <AppBar>
            <Toolbar>
                <IconButton color="inherit" onClick={toggle}>
                    <MenuIcon/>
                </IconButton>

                <Typography variant="h5" marginLeft={open?21:0} sx={{transition: "marginLeft 10s"}}>
                    Gotita Feliz
                </Typography>

                <Icon color="inherit" sx={{marginLeft: "auto"}}>
                    <InvertColorsSharpIcon/>
                </Icon>

            </Toolbar>
        </AppBar>
    );
};


export default NavBar;
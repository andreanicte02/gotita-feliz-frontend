import React from 'react';
import { Box, Icon, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InvertColorsSharpIcon from "@mui/icons-material/InvertColorsSharp";


const NavBar = ({open,toggle}) => {

    return (
        <Box bgcolor={"#1565c0"} width={"100%"} height={60}>
            <Toolbar>
                <IconButton onClick={toggle}>
                    <MenuIcon sx={{color: "white"}}/>
                </IconButton>

                <Typography variant="h5" marginLeft={open?21:1} sx={{transition: "marginLeft 2", color: "white"} }>
                    Gotita Feliz
                </Typography>

                <Icon color="inherit" sx={{marginLeft: "auto", color: "white"}}>
                    <InvertColorsSharpIcon/>
                </Icon>

            </Toolbar>
        </Box>
    );
};


export default NavBar;
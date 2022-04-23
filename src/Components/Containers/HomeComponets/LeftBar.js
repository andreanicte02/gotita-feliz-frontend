import React from 'react';
import {
    ListItemButton,
    ListItemIcon,
    ListItemText,
    List,
    Box,
    Divider,
    Drawer,
    IconButton,
    Typography, Toolbar, Icon
} from '@mui/material'
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BarChartIcon from "@mui/icons-material/BarChart";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const LeftBar = ({open, toggle}) => {
    return (
        <Box
        >
            <Drawer open={open}>
                <Toolbar>
                    <Icon color="inherit">
                        <AccountCircleSharpIcon />
                    </Icon>

                    <Typography variant="h6">
                        Empleado
                    </Typography>
                    <IconButton onClick={toggle}>
                        <ChevronLeftIcon />
                    </IconButton>

                </Toolbar>
            <Divider/>
            <List>

                <ListItemButton>

                    <ListItemIcon>
                        <DashboardIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard"/>

                </ListItemButton>

                <ListItemButton>

                    <ListItemIcon>
                        <AssignmentIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Registrar-Bolsas"/>

                </ListItemButton>

                <ListItemButton>

                    <ListItemIcon>
                        <AssignmentIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Registrar-Tambos"/>

                </ListItemButton>


                <ListItemButton>

                    <ListItemIcon>
                        <BarChartIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Graficas"/>

                </ListItemButton>


            </List>

            <Divider/>

            <List>

                <ListItemButton>

                    <ListItemIcon>
                        <LogoutSharpIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Salir"/>

                </ListItemButton>
            </List>

            </Drawer>
        </Box>
    );
};



export default LeftBar;
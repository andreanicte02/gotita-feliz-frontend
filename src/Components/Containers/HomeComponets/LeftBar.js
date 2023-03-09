import React from 'react';
import {
    ListItemButton,
    ListItemIcon,
    ListItemText,
    List,
    Divider,
    Drawer,
    IconButton,
    Typography, Icon, Box
} from '@mui/material'
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import LogoutSharpIcon from "@mui/icons-material/LogoutSharp";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import {useNavigate} from "react-router-dom";

const LeftBar = ({open, toggle}) => {
    const navigate = useNavigate();

    return (

        <Drawer open={open}>

            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                border:20,
                borderColor:'transparent'
            }}>
                <Icon sx={{paddingRight:2}}>
                    <AccountCircleSharpIcon/>
                </Icon>

                <Typography variant="h6">
                    Welcome!
                </Typography>
                <IconButton onClick={toggle}>
                    <ChevronLeftIcon/>
                </IconButton>
            </Box>

            <Divider/>
            <List>

                <ListItemButton>

                    <ListItemIcon>
                        <DashboardIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard"  onClick={()=>{navigate('/home/dashboard')}}/>

                </ListItemButton>

                <ListItemButton>

                    <ListItemIcon>
                        <AssignmentIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Registro"  onClick={()=>{navigate('/home/register')}}/>

                </ListItemButton>
            </List>

            <Divider/>

            <List>

                <ListItemButton onClick={()=>{navigate('/')}}>

                    <ListItemIcon>
                        <LogoutSharpIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Salir"/>

                </ListItemButton>
            </List>

        </Drawer>
    );
};


export default LeftBar;
import React, { Fragment } from 'react'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import AssignmentIcon from '@mui/icons-material/Assignment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';

const LeftBar = () => {
    return (
        <Fragment>

            <ListItemButton>

                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />

            </ListItemButton>

            <ListItemButton>

                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Registrar-Bolsas" />

            </ListItemButton>

            <ListItemButton>

                <ListItemIcon>
                    <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Registrar-Tambos" />

            </ListItemButton>



            <ListItemButton>

                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Graficas" />

            </ListItemButton>

        </Fragment>


    );
}

export default LeftBar
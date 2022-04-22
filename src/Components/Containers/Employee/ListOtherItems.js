import React , { Fragment } from 'react'
import LogoutSharpIcon from '@mui/icons-material/LogoutSharp';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

const ListOtherItems = () => {
    return (
        <Fragment>

            <ListItemButton>

                <ListItemIcon>
                    <LogoutSharpIcon />
                </ListItemIcon>
                <ListItemText primary="Salir" />

            </ListItemButton>

        </Fragment>
    );
}

export default ListOtherItems
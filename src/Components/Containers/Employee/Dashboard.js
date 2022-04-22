import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppBar, List, Box, Toolbar, IconButton, Typography, Drawer, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import LeftBar from './LeftBar'
import InvertColorsSharpIcon from '@mui/icons-material/InvertColorsSharp';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import ListOtherItems from './ListOtherItems';

const Dashboard = () => {

    const [flagOpenBar, setFlagOpenBar] = React.useState(true);

    const mdTheme = createTheme();

    const openBar = () => {

        setFlagOpenBar(!flagOpenBar);
    };

    return (
        <ThemeProvider theme={mdTheme}>

            <Box sx={{ display: 'flex' }}>

                <AppBar position='absolute' open={flagOpenBar} >

                    <Toolbar>

                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={openBar}
                            sx={{


                                ...(!flagOpenBar && { marginRight: '10px' }),
                                ...(flagOpenBar && { marginRight: '180px' }),
                            }}

                        >
                            <MenuIcon />

                        </IconButton>

                        <Typography
                            variant="h5"
                            noWrap
                            sx={{ flexGrow: 1 }}>

                            Gotita Feliz
                        </Typography>

                        <IconButton color="inherit">
                            <InvertColorsSharpIcon />
                        </IconButton>

                    </Toolbar>

                </AppBar>

                <Drawer variant="permanent" open={flagOpenBar}
                    sx={{
                        ...(!flagOpenBar && { display: 'none' }),

                    }}
                >

                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],


                        }}

                    >

                        <IconButton color="inherit">
                            <AccountCircleSharpIcon />
                        </IconButton>

                        <Typography variant="h6">
                            Empleado
                        </Typography>
                        <IconButton onClick={openBar}>
                            <ChevronLeftIcon />
                        </IconButton>

                    </Toolbar>

                    <Divider />
                    <List>
                        <LeftBar />
                    </List>

                    <Divider/>

                    <List>
                        <ListOtherItems/>
                    </List>

                </Drawer>

            </Box>

        </ThemeProvider>
    );
}

export default Dashboard
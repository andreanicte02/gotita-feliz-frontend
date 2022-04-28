import React, {useState} from 'react';

import {Box, Grid,} from "@mui/material";
import NavBar from "./HomeComponets/NavBar"
import LeftBar from "./HomeComponets/LeftBar";
import ContentCentral from "./HomeComponets/ContentCentral";

const Home = () => {

    const [open, setOpen] = useState(false);

    const toggleBar = () => {
        setOpen(!open)
    }


    return (
        <Box maxWidth="xl" minWidth="xs">


            <NavBar open={open} toggle={toggleBar}></NavBar>


            <LeftBar open={open} toggle={toggleBar}></LeftBar>






        </Box>

    );
};


export default Home;
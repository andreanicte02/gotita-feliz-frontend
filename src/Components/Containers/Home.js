import React, {useState} from 'react';

import { Container, Box} from "@mui/material";
import NavBar from "./HomeComponets/NavBar"
import LeftBar from "./HomeComponets/LeftBar";

const Home = () => {

    const [open,setOpen]=useState(false);

    const toggleBar = () =>{
        setOpen(!open)
    }


    return (

        <Box>
            <NavBar open={open} toggle={toggleBar}></NavBar>
            <LeftBar open={open} toggle={toggleBar}></LeftBar>


        </Box>

    );
};


export default Home;
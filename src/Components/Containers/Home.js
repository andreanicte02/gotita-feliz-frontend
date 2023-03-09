import React, {useState} from 'react';

import NavBar from "./HomeComponets/NavBar"
import LeftBar from "./HomeComponets/LeftBar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Dashboard} from "../Pages/Dashboard";
import {Box} from "@mui/material";

const Home = () => {

    const [open, setOpen] = useState(false);

    const toggleBar = () => {
        setOpen(!open)
    }


    return (
        <>


            <NavBar open={open} toggle={toggleBar}></NavBar>


            <LeftBar open={open} toggle={toggleBar}></LeftBar>


            <Box paddingTop={10}>
                <Routes>

                    <Route path="/" element={<Dashboard/>}/>


                </Routes>
            </Box>

        </>

    );
};


export default Home;
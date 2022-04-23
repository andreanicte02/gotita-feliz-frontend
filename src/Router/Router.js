import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from '../Components/Containers/Home';
import App from '../App';
const Router = () => {
  return (
    <BrowserRouter>
        <Routes>

            <Route  path="/" element={<App/>}/>

            <Route  path="/login" element={<App/>}/>

            <Route  path="/home" element={<Home/>}/>
            
        </Routes>
    
    </BrowserRouter>
  );
}

export default Router
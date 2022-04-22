import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Employee from '../Components/Containers/Employee';
import App from '../App';
const Router = () => {
  return (
    <BrowserRouter>
        <Routes>

            <Route  path="/" element={<App/>}/>

            <Route  path="/login" element={<App/>}/>

            <Route  path="/employee" element={<Employee/>}/>
            
        </Routes>
    
    </BrowserRouter>
  );
}

export default Router
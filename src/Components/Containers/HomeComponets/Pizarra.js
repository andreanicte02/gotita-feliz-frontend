import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Box, Button} from "@mui/material";

const Pizarra = props => {

    const [open,setOpen] = useState(true);

    const onClick=() =>{

        setOpen(!open);

    }

    return (
       <Box>
           <Box width={{xs:0,sm:100,md:200,lg:500}} sx={{transition: "width 2s"}} overflow="hidden" bgcolor={"pink"} height={100}>

               <Box width={300} height={300} bgcolor={{md:"salmon", lg:"yellow"} }>
                   <h1> hola </h1>
               </Box>

           </Box>

           <Button onClick={onClick}>
               button
           </Button>
       </Box>
    );
};

Pizarra.propTypes = {

};

export default Pizarra;
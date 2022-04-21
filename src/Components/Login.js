import React from 'react'
import { Container, Box, TextField, Avatar, Typography, Button } from '@mui/material'
import InvertColorsSharpIcon from '@mui/icons-material/InvertColorsSharp';
import Copyright from './Copyright';
import { color } from '@mui/system';
const Login = () => {

  const boxLogin ={

    marginTop:8,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    p:7,
    border: '1px dashed blue'

   
  };

  const containerFather ={
   
    component: 'main',

  }

  return (
    
    <Container sx={ containerFather }  maxWidth="xs">
        <Box
        sx={boxLogin}>

          <Avatar sx={{m:1, bgcolor: 'primary.main'}}>
            <InvertColorsSharpIcon/>
          </Avatar>

          <Typography component="h1" variant="h5">Gotita-Feliz</Typography>

          <Box sx={{mt:1}}>

            <TextField 
              id="email"
              label="Correo Electronico"
              name="email"
              fullWidth
              autoFocus
              required 
              type='email'
              margin='normal'
              
            />   


            <TextField 
              id="user"
              label="Usuario"
              name="user"
              fullWidth
              autoFocus
              required  
              type='text'
              margin='normal'
              
            />   
    

            <TextField 
              id="password"
              label="Contraseña"
              name="password"
              fullWidth
              autoFocus
              required  
              type='password'
              margin='normal'
            />   
            
            <Button 
              variant="contained"
              fullWidth
              sx={{mt:3}}
            >
              Ingresar
              
            </Button>

        
          </Box>
        </Box>
        <Copyright></Copyright>
       


    </Container>
  )
}

export default Login
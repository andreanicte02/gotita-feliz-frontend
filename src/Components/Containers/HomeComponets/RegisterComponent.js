import React from 'react';
import {Box, Button, TableBody, TableContainer, TableHead, TableRow, TextField, Typography,TableCell} from "@mui/material";


const RegisterComponent = () => {
    return (
        <Box sx={{ display:"flex",flexWrap: 'wrap', justifyContent:'center'} }  alignItems="center"
             minHeight="50vh">


            <Box sx={{width:"30%", p:5}}>


                <TextField
                    id="cantidadBolsas"
                    label="Cantidad bolsas por dia"
                    name="cantidadBolsas"
                    fullWidth
                    autoFocus
                    required
                    type='number'
                    margin='normal'
                />

                <Button
                    variant="contained"
                    fullWidth
                    sx={{mt:3}}
                    color="info"
                >
                    Registrar
                </Button>

            </Box>
            <Box sx={{width:"30%",p:5}}>

                <TableContainer>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Dia
                            </TableCell>
                            <TableCell>
                                Cantidad
                            </TableCell>
                            <TableCell>
                                IngresosQ.
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                Lunes
                            </TableCell>
                            <TableCell>
                                12
                            </TableCell>
                            <TableCell>
                                1000Q
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Lunes
                            </TableCell>
                            <TableCell>
                                12
                            </TableCell>
                            <TableCell>
                                1000Q
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Lunes
                            </TableCell>
                            <TableCell>
                                12
                            </TableCell>
                            <TableCell>
                                1000Q
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Lunes
                            </TableCell>
                            <TableCell>
                                12
                            </TableCell>
                            <TableCell>
                                1000Q
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Lunes
                            </TableCell>
                            <TableCell>
                                12
                            </TableCell>
                            <TableCell>
                                1000Q
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Lunes
                            </TableCell>
                            <TableCell>
                                12
                            </TableCell>
                            <TableCell>
                                1000Q
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                Lunes
                            </TableCell>
                            <TableCell>
                                12
                            </TableCell>
                            <TableCell>
                                1000Q
                            </TableCell>
                        </TableRow>
                    </TableBody>

                </TableContainer>

            </Box>

        </Box>
    );
};


export default RegisterComponent;
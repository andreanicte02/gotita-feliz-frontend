import {Box, Button, FormControl, FormHelperText, FormLabel, Input, InputLabel, TextField} from "@mui/material";

export const Form = () => {
    return (

        <Box sx={{border:0 ,display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',}}>
            <FormControl fullWidth>
                <FormLabel sx={{paddingBottom:2}}>Bolsas producidas</FormLabel>
                <TextField id="outlined-basic"  variant="outlined" sx={{paddingBottom:2}} />
                <Button variant={"contained"}>Registrar</Button>
            </FormControl>
        </Box>
    )
}
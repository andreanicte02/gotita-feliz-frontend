import {Container, Grid} from "@mui/material";
import {Form} from "../Components/Form";
import {Data} from "../Components/Data";


export const Register = () => {
    return (
        <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={5} lg={3} sx={{border:0}}>
                    <Form/>
                </Grid>
                <Grid item xs={12} md={7} lg={9}>
                    <Data/>
                </Grid>
            </Grid>
        </Container>
    )
}
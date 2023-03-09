import {useTheme} from '@mui/material/styles';
import {Chart} from "../Components/Chart";
import {Container, Grid, Paper} from "@mui/material";
import {Deposits} from "../Components/Deposits";
import {Data} from "../Components/Data";


export const Dashboard = () => {
    return (
        <>
            <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8} lg={9}>
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 240,
                            }}
                        >
                            <Chart/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4} lg={3}> {/*breakpoins*/}
                        <Paper
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                height: 240,
                            }}
                        >
                            <Deposits />
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                        <Data />
                    </Paper>
                </Grid>

            </Container>
        </>
    );
}
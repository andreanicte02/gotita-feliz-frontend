import {Title} from "./Title";
import {Link, Typography} from "@mui/material";

const  preventDefault=(event) =>{
    event.preventDefault();
}
export const Deposits = () => {
    return (
        <>
            <Title title={'Estimado'}></Title>
            <Typography component="p" variant="h4">
                Q4,000.00
            </Typography>
            <Typography color="text.secondary" sx={{flex: 1}}>
                on 15 March, 2022
            </Typography>
            <div>
                <Link color="primary" href="#" onClick={preventDefault}>
                    Revisar Historial
                </Link>
            </div>
        </>
    )
}
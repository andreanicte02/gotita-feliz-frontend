import {Typography} from "@mui/material";

export const Title = ({title}) => {
    return (
        <Typography component="h2" variant="h6" color="primary" gutterBottom>
            {title}
        </Typography>
    )
}
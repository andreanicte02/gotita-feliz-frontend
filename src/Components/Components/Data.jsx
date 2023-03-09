import {Title} from "./Title";
import {Link, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";

function createData(id, date, name, shipTo, amount) {
    return {id, date, name, shipTo, amount};
}

const rows = [
    createData(
        0,
        '16 Mar, 2023',
        'Elvis Presley',
        'Sinai',
        1000.00,
    ),
    createData(
        1,
        '16 Mar, 2023',
        'Elvis Presley',
        'Col. 1',
        1000.00,
    ),
    createData(2, '16 Mar, 2023', 'Tom Scholz', 'Boston, MA', 1000.00),
    createData(
        3,
        '15 Mar, 2023',
        'Elvis Presley',
        'Col 2.',
        1000.00,
    ),
];

function preventDefault(event) {
    event.preventDefault();
}

export const Data = () => {
    return (
        <>
            <Title title={'Registro de material'}/>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Fecha</TableCell>
                        <TableCell>Nombre</TableCell>
                        <TableCell>Cliente</TableCell>
                        <TableCell align="right">Ventas</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.date}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.shipTo}</TableCell>
                            <TableCell align="right">{`Q${row.amount}`}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    )
}
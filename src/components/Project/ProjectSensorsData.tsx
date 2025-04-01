import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";

const SensorTable = () => {
    const data = [
        { sensor: "Temperatura", estado: 25, unidad: "grados", min: 17, max: 35 },
        { sensor: "pH", estado: 5, unidad: "H+", min: 0, max: 14 },
    ];

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow sx={{ backgroundColor: "#28517a" }}>
                        {["Sensor", "Estado", "Unidad", "Valor mínimo", "Valor máximo", "Registro histórico"].map((header) => (
                            <TableCell key={header} sx={{ color: "#fff", fontWeight: "bold", textAlign: "center" }}>
                                {header}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>{row.sensor}</TableCell>
                            <TableCell sx={{ fontWeight: "bold" }}>{row.estado}</TableCell>
                            <TableCell>{row.unidad}</TableCell>
                            <TableCell>{row.min}</TableCell>
                            <TableCell>{row.max}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="primary">Acceder</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default SensorTable;

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";

interface Sensor {
    sensor: string;
    estado: number;
    unidad: string;
    min: number;
    max: number;
    historyUrl: string;
}

interface ProjectSensorsDataProps {
    sensors: Sensor[];
}

export default function ProjectSensorsData({ sensors }: ProjectSensorsDataProps) {
    return (
        <TableContainer component={Paper} sx={{ maxHeight: 300, overflowY: "auto" }}>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        {["Sensor", "Estado", "Unidad", "Mínimo", "Máximo", "Registro histórico"].map((header) => (
                            <TableCell
                                key={header}
                                align="center"
                                sx={{ fontWeight: "bold", backgroundColor: "#28517a", color: "#fff" }}
                            >
                                {header}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {sensors.map((sensor, index) => (
                        <TableRow key={index}>
                            <TableCell align="center">{sensor.sensor}</TableCell>
                            <TableCell align="center" sx={{ fontWeight: "bold" }}>{sensor.estado}</TableCell>
                            <TableCell align="center">{sensor.unidad}</TableCell>
                            <TableCell align="center">{sensor.min}</TableCell>
                            <TableCell align="center">{sensor.max}</TableCell>
                            <TableCell align="center">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    href={sensor.historyUrl} // Redirección al historial del sensor
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Acceder
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

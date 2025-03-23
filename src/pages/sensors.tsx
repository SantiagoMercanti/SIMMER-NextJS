import { Container, Typography, List, ListItem, ListItemText } from "@mui/material";

const fakeSensors = [
    { id: 1, name: "Sensor de Temperatura", value: "25°C" },
    { id: 2, name: "Sensor de Humedad", value: "60%" },
];

export default function SensorsPage() {
    return (
        <Container>
            <Typography variant="h4">Sensores</Typography>
            <List>
                {fakeSensors.map((sensor) => (
                    <ListItem key={sensor.id}>
                        <ListItemText primary={sensor.name} secondary={`Valor: ${sensor.value}`} />
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}

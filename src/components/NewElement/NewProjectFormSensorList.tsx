import { useEffect, useState } from "react";
import styles from "app/styles/ElementList.module.css";
// import Link from "next/link";

interface Sensor {
    id: string;
    name: string;
}

export default function NewProjectFormSensorList() {
    const [sensors, setSensors] = useState<Sensor[]>([]);
    const [selectedSensors, setSelectedSensors] = useState<Set<string>>(new Set());

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .then((data) => setSensors(data.map((p: any) => ({ id: p.id.toString(), name: p.title }))))
            .catch((err) => console.error("Error al obtener sensores:", err));
    }, []);

    const toggleSensorSelection = (id: string) => {
        setSelectedSensors((prev) => {
            const newSelection = new Set(prev);
            if (newSelection.has(id)) {
                newSelection.delete(id);
            } else {
                newSelection.add(id);
            }
            return newSelection;
        });
    };

    return (
        <div>
            <h3 className={styles.subtitle}>Sensores</h3>
            <div className={styles.checkList}>
                {sensors.length > 0 ? (
                    sensors.map((sensor) => (
                        <label key={sensor.id} className={styles.listItem}>
                            <input 
                                type="checkbox" 
                                checked={selectedSensors.has(sensor.id)} 
                                onChange={() => toggleSensorSelection(sensor.id)}
                            />
                            {sensor.name}
                        </label>
                    ))
                ) : (
                    <p>No se encontraron sensores en el sistema.</p>
                )}
            </div>
        </div>
    );
}

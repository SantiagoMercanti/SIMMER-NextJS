import { useEffect, useState } from "react";
import styles from "../../styles/ElementList.module.css";
import Link from "next/link";

interface Sensor {
    id: string;
    name: string;
}

export default function SensorList() {
    const [sensors, setSensors] = useState<Sensor[]>([]);

    useEffect(() => {
        fetch("http://localhost:1880/sensors") // URL de Node-RED
            .then((res) => res.json())
            .then((data) => setSensors(data))
            .catch((err) => console.error("Error al obtener sensores:", err));
    }, []);

    return (
        <div className={styles.panel}>
            <h2 className={styles.title}>SENSORES</h2>
            <div className={styles.list}>
                {sensors.length > 0 ? (
                    sensors.map((sensor) => (
                        <button key={sensor.id}>{sensor.name}</button>
                    ))
                ) : (
                    <p>Cargando sensores...</p>
                )}
            </div>
            <Link href={"/newsensor"}>
                <button className={styles.createBtn}>Crear Sensor</button>
            </Link>
        </div>
    );
}

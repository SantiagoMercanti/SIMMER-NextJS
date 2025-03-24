import { useEffect, useState } from "react";
import styles from "app/styles/ElementList.module.css";
import Link from "next/link";

interface Sensor {
    id: string;
    name: string;
}

export default function SensorList() {
    const [sensors, setSensors] = useState<Sensor[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json()) // Convertir respuesta a JSON
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .then((data) => setSensors(data.map((p: any) => ({ id: p.id, name: p.title })))) // Mapear datos al formato esperado
            .catch((err) => console.error("Error al obtener sensores:", err));
    }, []);

    return (
        <div className={styles.panel}>
            <h2 className={styles.title}>SENSORES</h2>
            <div className={styles.list}>
                {sensors.length > 0 ? (
                    sensors.map((sensor) => (
                        <button 
                        className={styles.listItem} 
                        key={sensor.id}
                        >{sensor.name}</button>
                    ))
                ) : (
                    <p>No se encontraron sensores en el sistema.</p>
                )}
            </div>
            <Link href={"/newsensor"}>
                <button className={styles.createBtn}>Crear Sensor</button>
            </Link>
        </div>
    );
}

import { useEffect, useState } from "react";
import styles from "app/styles/ElementList.module.css";
import Link from "next/link";

interface Actuator {
    id: string;
    name: string;
}

export default function ActuatorList() {
    const [actuators, setActuators] = useState<Actuator[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json()) // Convertir respuesta a JSON
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .then((data) => setActuators(data.map((p: any) => ({ id: p.id, name: p.title })))) // Mapear datos al formato esperado
            .catch((err) => console.error("Error al obtener actuadores:", err));
    }, []);

    return (
        <div className={styles.panel}>
            <h2 className={styles.title}>ACTUADORES</h2>
            <div className={styles.list}>
                {actuators.length > 0 ? (
                    actuators.map((actuator) => (
                        <button 
                        className={styles.listItem} 
                        key={actuator.id}
                        >{actuator.name}</button>
                    ))
                ) : (
                    <p>No existen actuadores en el sistema.</p>
                )}
            </div>
            <Link href={"/newactuator"}>
                <button className={styles.createBtn}>Crear Actuador</button>
            </Link>
        </div>
    );
}

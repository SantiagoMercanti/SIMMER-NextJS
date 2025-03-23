import { useEffect, useState } from "react";
import styles from "../../styles/ElementList.module.css";
import Link from "next/link";

interface Actuator {
    id: string;
    name: string;
}

export default function ActuatorList() {
    const [actuators, setActuators] = useState<Actuator[]>([]);

    useEffect(() => {
        fetch("http://localhost:1880/actuators") // URL de Node-RED
            .then((res) => res.json())
            .then((data) => setActuators(data))
            .catch((err) => console.error("Error al obtener actuadores:", err));
    }, []);

    return (
        <div className={styles.panel}>
            <h2 className={styles.title}>ACTUADORES</h2>
            <div className={styles.list}>
                {actuators.length > 0 ? (
                    actuators.map((actuator) => (
                        <button key={actuator.id}>{actuator.name}</button>
                    ))
                ) : (
                    <p>Cargando actuadores...</p>
                )}
            </div>
            <Link href={"/newactuator"}>
                <button className={styles.createBtn}>Crear Actuador</button>
            </Link>
        </div>
    );
}

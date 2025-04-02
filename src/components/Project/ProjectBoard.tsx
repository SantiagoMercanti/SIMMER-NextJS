import styles from "app/styles/ProjectBoard.module.css"
import ProjectSensorsData from "./ProjectSensorsData";

export default function ProjectBoard() {
    const data = {
        title: "Proyecto 1",
        description: "Descripción del proyecto 1",
        sensors: [
            { sensor: "Temperatura", estado: 25, unidad: "grados", min: 17, max: 35, historyUrl: "/history/temperature" },
            { sensor: "pH", estado: 5, unidad: "H+", min: 0, max: 14, historyUrl: "/history/ph" },
            { sensor: "Humedad", estado: 50, unidad: "%", min: 0, max: 100, historyUrl: "/history/humedad" },
            { sensor: "Oxígeno", estado: 8, unidad: "%", min: 5, max: 15, historyUrl: "/history/oxigeno"},
            { sensor: "Presión", estado: 1013, unidad: "hPa", min: 990, max: 1050, historyUrl: "/history/presion" },
        ],
    };

    return (
        <main className={styles.container}>
            <div className={styles.box}>
                <h2>{data.title}</h2>
                <div className={styles.projectContainer}>
                    <div className={styles.projectInfo}>
                        <h3>Descripción</h3>
                        <p>{data.description}</p>
                    </div>
                    <ProjectSensorsData sensors={data.sensors} />
                    <button className={styles.modifyBtn}>Modificar proyecto</button>
                </div>
            </div>
        </main>
    );
} 
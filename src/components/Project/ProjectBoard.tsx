import styles from "app/styles/ProjectBoard.module.css"
import ProjectSensorsData from "./ProjectSensorsData";

export default function ProjectBoard() {
    return (
        <main className={styles.container}>
            <div className={styles.box}>
                <h2>TITULO DEL PROYECTO</h2>
                <div className={styles.projectContainer}>
                    <div className={styles.projectInfo}>
                        <h3>Descripción</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ligula nec nunc facilisis tincidunt. Donec nec justo vel enim efficitur varius.</p>
                    </div>
                    <ProjectSensorsData></ProjectSensorsData>
                    <button className={styles.modifyBtn}>Modificar proyecto</button>
                </div> 
            </div>         
        </main>
    );
} 
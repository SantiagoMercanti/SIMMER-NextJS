import styles from "../../styles/Dashboard.module.css";
import ActuatorList from "./ActuatorList/ActuatorList";
import SensorList from "./SensorList/SensorList";
import ProjectList from "./ProjectList/ProjectList";

export default function Dashboard() {
    return (
        <main>
            <div className={styles.container}>
                <ProjectList />
                <SensorList />
                <ActuatorList />
            </div>
        </main>
    );
}

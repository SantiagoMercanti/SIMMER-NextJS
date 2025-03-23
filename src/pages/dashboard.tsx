// import Link from "next/link";
import styles from "../styles/Dashboard.module.css";
import ActuatorList from "app/components/ActuatorList/ActuatorList";
import SensorList from "app/components/SensorList/SensorList";
import ProjectList from "app/components/ProjectList/ProjectList";


export default function Dashboard() {
    return (
        <main className={styles.container}>
            <ProjectList />
            <SensorList />
            <ActuatorList />
        </main>
    );
}

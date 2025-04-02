import styles from "app/styles/NewElement.module.css"
import NewProjectFormSensorList from "./NewProjectFormSensorList";
import Link from "next/link";

export default function NewSensorForm() {
    return (
        <main className={styles.container}>
            <div className={styles.formContainer}>
                <h2>AGREGAR PROYECTO</h2>
                <form className={styles.form}>
                    <div className={styles.leftColumn}>
                        <input type="text" placeholder="Nombre" />
                        <input type="text" placeholder="Descripción" />
                    </div>
                    <div className={styles.rightColumn}>
                        <NewProjectFormSensorList/>
                    </div>
                    <Link href={"/dashboard"}>
                        <button className={styles.createBtn}>Crear Proyecto</button>
                    </Link>
                </form>
            </div>
        </main>
    );
}
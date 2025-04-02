import styles from "app/styles/NewElement.module.css";
import Link from "next/link";

export default function NewSensorForm() {
    return (
        <main className={styles.container}>
            <div className={styles.formContainer}>
                <h2>AGREGAR SENSOR</h2>
                <form className={styles.form}>
                    <input type="text" placeholder="Nombre" />
                    <input type="text" placeholder="Descripción" />
                    <input type="text" placeholder="Valor mínimo" />
                    <input type="text" placeholder="Valor máximo" />
                    <input type="text" placeholder="Origen de datos" />
                    <input type="text" placeholder="Unidad de medida" />
                    <Link href={"/dashboard"}>
                        <button className={styles.createBtn}>Crear Sensor</button>
                    </Link>
                </form>
            </div>
        </main>
    );
}
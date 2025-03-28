import styles from "app/styles/NewElement.module.css"

export default function NewSensorForm() {
    return (
        <main className={styles.container}>
            <div className={styles.formContainer}>
                <h2>AGREGAR PROYECTO</h2>
                <form className={styles.form}>
                    <input type="text" placeholder="Nombre" />
                    <input type="text" placeholder="Descripción" />
                    <button className={styles.createBtn}>Crear Proyecto</button>
                </form>
            </div>
        </main>
    );
}
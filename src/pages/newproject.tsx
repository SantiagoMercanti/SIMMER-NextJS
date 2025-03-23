import styles from "../styles/NewProject.module.css";

export default function NewProject() {
    return (
        <main className={styles.container}>
            <h2>AGREGAR PROYECTO</h2>
            <form className={styles.form}>
                <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Descripción" />
                <button>Crear Proyecto</button>
            </form>
        </main>
    );
}

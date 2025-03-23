import styles from "../styles/newElement.module.css";

export default function NewActuator() {
    return (
        <main className={styles.container}>
            <h2>AGREGAR ACTUADOR</h2>
            <form className={styles.form}>
                <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Descripción" />
                <input type="text" placeholder="Valor mínimo" />
                <input type="text" placeholder="Valor máximo" />
                <input type="text" placeholder="Origen de datos" />
                <input type="text" placeholder="Unidad de Medida" />
                <button>Crear Actuador</button>
            </form>
        </main>
    );
}

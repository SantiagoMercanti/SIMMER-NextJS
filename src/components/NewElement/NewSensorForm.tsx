import styles from "app/styles/newElement.module.css";

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
                    <input type="text" placeholder="Unidad de Medida" />
                    <button>Crear Sensor</button>
                </form>
            </div>
        </main>
    );
}
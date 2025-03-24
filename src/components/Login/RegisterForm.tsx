import styles from "../../styles/Auth.module.css";

export default function RegisterForm() {
    return (
        <form className={styles.form}>
            <div className={styles.formRegister}>
                <h2>Registrarse</h2>
                <input type="text" placeholder="Nombre" />
                <input type="text" placeholder="Apellido" />
                <input type="text" placeholder="Correo Electrónico" />
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Contraseña" />
                <button>Registrarse</button>
            </div>
        </form>
    );
}
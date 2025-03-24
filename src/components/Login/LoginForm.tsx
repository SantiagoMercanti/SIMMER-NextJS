import styles from "../../styles/Auth.module.css";

export default function LoginForm() {
    return (
        <form className={styles.form}>
            <div className={styles.formLogin}>
                <h2>Iniciar Sesión</h2>
                <input type="text" placeholder="Usuario" />
                <input type="password" placeholder="Contraseña" />
                <button>Entrar</button>
            </div>
        </form>
    );
}
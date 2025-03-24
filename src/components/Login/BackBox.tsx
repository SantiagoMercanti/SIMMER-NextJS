import styles from "../../styles/Auth.module.css";

export default function BackBox({ isLogin, setIsLogin }: { isLogin: boolean; setIsLogin: (value: boolean) => void }) {
    return (
        <div className={styles.backBox}>
            {!isLogin ? (
                <div className={styles.backBoxLogin}>
                    <h2>S I M M E R</h2>
                    <h3>¿Ya tienes una cuenta?</h3>
                    <p>Inicia sesión para entrar en el sistema.</p>
                    <button onClick={() => setIsLogin(true)}>Iniciar Sesión</button>
                </div>
            ) : (
                <div className={styles.backBoxRegister}>
                    <h2>S I M M E R</h2>
                    <h3>¿Aún no tienes una cuenta?</h3>
                    <p>Regístrate para que puedas iniciar sesión.</p>
                    <button onClick={() => setIsLogin(false)}>Registrarse</button>
                </div>
            )}
        </div>
    );
}

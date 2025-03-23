import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Login.module.css";

export default function LoginPage() {
    const router = useRouter();
    const [isRegistering, setIsRegistering] = useState(false);

    return (
        <main className={styles.container}>
            <div className={styles.backbox}>
                <div className={styles.backboxLogin}>
                    <h2>S I M M E R</h2>
                    <h3>¿Ya tienes una cuenta?</h3>
                    <p>Inicia sesión para entrar en el sistema.</p>
                    <button onClick={() => setIsRegistering(false)}>Iniciar Sesión</button>
                </div>
                <div className={styles.backboxRegister}>
                    <h2>S I M M E R</h2>
                    <h3>¿Aún no tienes una cuenta?</h3>
                    <p>Regístrate para que puedas iniciar sesión.</p>
                    <button onClick={() => setIsRegistering(true)}>Registrarse</button>
                </div>
            </div>

            <div className={styles.loginRegister}>
                {!isRegistering ? (
                    <form className={styles.form}>
                        <h2>Iniciar Sesión</h2>
                        <input type="text" placeholder="Usuario" />
                        <input type="password" placeholder="Contraseña" />
                        <button onClick={() => router.push("/dashboard")}>Entrar</button>
                    </form>
                ) : (
                    <form className={styles.form}>
                        <h2>Registrarse</h2>
                        <input type="text" placeholder="Nombre" />
                        <input type="text" placeholder="Apellido" />
                        <input type="text" placeholder="Correo Electrónico" />
                        <input type="text" placeholder="Usuario" />
                        <input type="password" placeholder="Contraseña" />
                        <button>Registrarse</button>
                    </form>
                )}
            </div>
        </main>
    );
}

import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import styles from "../../styles/Auth.module.css";

export default function FrontBox({ isLogin }: { isLogin: boolean }) {
    return (
        <div className={styles.frontBox}>
            {isLogin ? <LoginForm /> : <RegisterForm />}
        </div>
    );
}

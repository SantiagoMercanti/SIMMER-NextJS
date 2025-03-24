import { useState } from "react";
import BackBox from "./BackBox";
import FrontBox from "./FrontBox";
import styles from "../../styles/Auth.module.css";

export default function AuthContainer() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <main 
            className={styles.container}
            style={{ flexDirection: isLogin ? "row-reverse" : "row" }}
            >
            <BackBox isLogin={isLogin} setIsLogin={setIsLogin} />
            <FrontBox isLogin={isLogin} />
        </main>
    );
}

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "../../styles/ElementList.module.css";

interface Project {
    id: string;
    name: string;
}

export default function ProjectList() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch("http://localhost:1880/projects") // URL de Node-RED
            .then((res) => res.json())
            .then((data) => setProjects(data))
            .catch((err) => console.error("Error al obtener proyectos:", err));
    }, []);

    return (
        <div className={styles.panel}>
            <h2 className={styles.title}>PROYECTOS</h2>
            <div className={styles.list}>
                {projects.length > 0 ? (
                    projects.map((project) => (
                        <button key={project.id}>{project.name}</button>
                    ))
                ) : (
                    <p>Cargando proyectos...</p>
                )}
            </div>
            <Link href="/newproject">
                <button className={styles.createBtn}>Crear Proyecto</button>
            </Link>
        </div>
    );
}

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "app/styles/ElementList.module.css";

interface Project {
    id: string;
    name: string;
}

export default function ProjectList() {
    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json()) // Convertir respuesta a JSON
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .then((data) => setProjects(data.map((p: any) => ({ id: p.id, name: p.title })))) // Mapear datos al formato esperado
            .catch((err) => console.error("Error al obtener proyectos:", err));
    }, []);
    

    return (
        <div className={styles.panel}>
            <h2 className={styles.title}>PROYECTOS</h2>
            <div className={styles.list}>
                {projects.length > 0 ? (
                    projects.map((project) => (
                        <button 
                        className={styles.listItem} 
                        key={project.id}
                        >{project.name}</button>
                    ))
                ) : (
                    <p>No existen proyectos en el sistema.</p>
                )}
            </div>
            <Link href="/newproject">
                <button className={styles.createBtn}>Crear Proyecto</button>
            </Link>
        </div>
    );
}

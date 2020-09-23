import React from 'react'
import useIntersection from '../../customs/animations/useIntersection'
import { ProjectDetailProps, ProjectLink, Stack } from '../../customs/types/StackType'
import styles from "./ProjectDetail.module.css"


const Project: React.FC<ProjectDetailProps> = ({ img, title, description, stacks, links}) => {
    const projectBoxInteraction = useIntersection<HTMLDivElement>({ delay: .8, duration: 1, direction: true })

    return (
        <div className={styles.container} {...projectBoxInteraction}>
            <section className={styles.imgSection}>
                <img src={img} alt="project" />
            </section>
            <section className={styles.projectDetailsSection}>
                <div className={styles.title}>{title}</div>
                <div className={styles.description}>{description}</div>
                <div className={styles.stacks}>
                    <ul>
                    {stacks.map((stack:Stack) => (
                        <li style={{border: `2px solid ${stack.color}`, color: `${stack.color}`}}>
                            {stack.name}
                        </li>
                    ))}
                    </ul>
                </div>
                <div className={styles.projectLink}>
                    {links.map((link:ProjectLink) => (
                        <>
                            <a href={link.link} target="_blank"># {link.content}</a>
                        </>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Project

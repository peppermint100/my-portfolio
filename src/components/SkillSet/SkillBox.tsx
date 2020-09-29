import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from "./SkillBox.module.css"

interface Props {
    icon: IconDefinition
    title: string
    skills: Array<string>
}

const SkillBox:React.FC<Props> = ({ icon, title, skills}) => {
    return (
        <div className={styles.boxContainer}>
            <section className={styles.icon}>
                <FontAwesomeIcon icon={icon} size="5x" color="#f39c12" />
            </section>
            <section className={styles.title}>
                {title}
            </section>
            <section className={styles.skills}>
                    {skills?.map((skill: string, idx: number) => (
                        <li key={idx}>
                            {skill}
                        </li>
                    ))}
            </section>
        </div>
    )
}

export default SkillBox

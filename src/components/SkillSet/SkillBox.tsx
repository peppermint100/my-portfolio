import React from 'react'
import { Detail } from '../../customs/types/SkillType'
import styles from "./SkillBox.module.css"

interface Props {
    title: string
    details: Detail[]
    moreInfo: any
}

const SkillBox:React.FC<Props> = ({ title, details, moreInfo}) => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <section className={styles.boxHeading}>
                    <p>{title}</p>
                </section>
                <section className={styles.skillDetails}>
                    { details?.map( (detail: Detail) => (
                        <ul key={detail.id}>
                            <div className={styles.title}>{detail.skillName}</div>
                            <div className={styles.description}>{
                                detail.description.map(((description, idx) => (
                                    <li key={idx}>
                                        ◼ {description}
                                    </li>
                                )))
                            }</div>
                        </ul>
                    ))}

                </section>
                <section className={styles.moreInfo}>
                    <button className={styles.moreInfoButton}>
                        {moreInfo}
                    </button>
                </section>
            </div>
        </div>
    )
}

export default SkillBox

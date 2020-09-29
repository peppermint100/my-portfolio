import React from 'react'
import styles from "./SkillSet.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faPalette, faCogs, faCommentDots } from "@fortawesome/free-solid-svg-icons"

import useInterection from "./../../customs/animations/useIntersection"
import useQuote from '../../customs/quote/useQuote'
import SkillBox from './SkillBox'

const SkillSet = () => {
    const headingIntersection = useInterection<HTMLElement>({ delay: 1, duration: 1.5 })

    const skillHeading = useQuote<string>({
        korean: "저는 이러한 것들을 공부했어요.",
        english: "These are What I've Learned So far."
    })

    const front_end_skills = ["HTML", "CSS", "React", "Redux", "Typescript", "Webpack"]
    const back_end_skills = ["NodeJS", "Express", "MySQL", "TypeORM", "" ]
    const extra_skills = ["Data Structure", "Algorithm", "Linux", "Database", "English"]

    return (
        <div className={styles.container}>
            <section className={styles.skillSetHeading} {...headingIntersection}>
                <FontAwesomeIcon icon={faCheck} size="3x" /> 
                <p>
                   {skillHeading} 
                </p> 
            </section>
            <section className={styles.skillBoxContainer}>
                <div className={styles.skillBoxes}>
                    <SkillBox icon={faPalette} title={"Front End"} skills={front_end_skills} />
                    <SkillBox icon={faCogs} title={"Back End"}   skills={back_end_skills}/>
                    <SkillBox icon={faCommentDots} title={"Extra"}  skills={extra_skills} />
                </div>
            </section>
        </div>
    )
}

export default SkillSet

import React from 'react'
import SkillBox from './SkillBox'
import styles from "./SkillSet.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"

import useInterection from "./../../customs/animations/useIntersection"
import { Detail } from '../../customs/types/SkillType'
import useQuote from '../../customs/quote/useQuote'

const SkillSet = () => {
    const headingIntersection = useInterection<HTMLElement>({ delay: 1, duration: 1.5 })
    const skillHeading = useQuote<string>({
        korean: "저는 이러한 것들을 공부했어요.",
        english: "These are What I've Learned So far."
    })
    const skill_description = useQuote<Array<string>>({ 
        korean: [
            "React Hooks를 사용하여 코드를 작성합니다.",
            "Redux, MobX등 전역 상태 라이브러리의 필요성을 알고 사용합니다.",
            "Typescript로 React 코드를 작성합니다.",
            "필요할 때 Custom Hooks를 만들어서 사용 범위와 효율을 최대화합니다.",
        ],
        english: [
            "I write react code with Hooks",
            "I understand why we need global state management libaraies like Redux and MobX and know how to use them properly",
            "I write react code with typescript",
            "I use my own custom hooks when I need one"
        ]})

    const skill: Detail = {
        id: 1,
        skillName: "React",
        description: skill_description 
    }

    const skill2: Detail = {
        id: 2,
        skillName: "React",
        description: skill_description
    }

    const skill3: Detail = {
        id: 3,
        skillName: "React",
        description: skill_description
    }

    const skill4: Detail = {
        id: 4,
        skillName: "React",
        description: skill_description
    }

    const details: Detail[] = [skill, skill2, skill3, skill4]
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
                        <SkillBox title="Front-End" details={details} moreInfo="and more" />
                        <SkillBox title="Front-End" details={details} moreInfo="and more"/>
                        <SkillBox title="Front-End" details={details} moreInfo="and more" />
                        <SkillBox title="Front-End" details={details} moreInfo="and more" />
                </div>
            </section>
        </div>
    )
}

export default SkillSet

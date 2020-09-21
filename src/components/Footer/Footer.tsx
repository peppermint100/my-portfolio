import React from 'react'
import styles from "./Footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faMedium } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons"
import useQuote from '../../customs/quote/useQuote'
import QuoteType from '../../customs/types/QuoteType'

const Footer = () => {

    const githubQuote:QuoteType = {
        korean: "깃허브",
        english: "Github"
    }
    const mediumQuote:QuoteType = {
            korean: "블로그",
            english: "Blog"
        }
    const coverLetterQuote:QuoteType = {
            korean: "이력서",
            english: "Resume"
        }

    const githubText = useQuote(githubQuote)
    const mediumText = useQuote(mediumQuote)
    const coverLetterText = useQuote(coverLetterQuote)

    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <section className={styles.links}>
                    <div className={styles.linkInfo}>
                        <FontAwesomeIcon icon={faGithub} size="3x" />
                        <a target="_blank" className={styles.link} href="https://github.com/peppermint100?tab=repositories">{githubText}</a>
                    </div>
                    <div className={styles.linkInfo}>
                        <FontAwesomeIcon icon={faMedium} size="3x" />
                        <a target="_blank" className={styles.link} href="https://medium.com/@krpeppermint100">{mediumText}</a>
                    </div>
                    <div className={styles.linkInfo}>
                        <FontAwesomeIcon icon={faEnvelopeOpenText} size="3x" />
                        <a target="_blank" className={styles.link} href="https://www.notion.so/In-Gyu-Lee-s-Cover-Letter-b936735b9f5648b59f0f6c76edbd5c8c">{coverLetterText}</a>
                    </div>
                </section>
                <section className={styles.copyrights}>
                    designed and developed by peppermint100 ⓒ Lee In Gyu
                </section>
            </div>
        </div>
    )
}

export default Footer
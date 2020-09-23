import React from 'react'
import styles from "./Footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faMedium } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons"
import useQuote from '../../customs/quote/useQuote'
import QuoteType from '../../customs/types/QuoteType'

const Footer = () => {

    const githubQuote:QuoteType<string> = {
        korean: "깃허브",
        english: "Github"
    }
    const mediumQuote:QuoteType<string> = {
            korean: "블로그",
            english: "Blog"
        }
    const coverLetterQuote:QuoteType<string> = {
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
                    <a className={styles.linkInfo} target="_blank" href="https://github.com/peppermint100?tab=repositories">
                        <FontAwesomeIcon icon={faGithub} size="3x" />
                        <a className={styles.link}>{githubText}</a>
                    </a>
                    <a className={styles.linkInfo} target="_blank" href="https://medium.com/@krpeppermint100">
                        <FontAwesomeIcon icon={faMedium} size="3x" />
                        <a className={styles.link}>{mediumText}</a>
                    </a>
                    <a className={styles.linkInfo} target="_blank" href="https://www.notion.so/In-Gyu-Lee-s-Cover-Letter-b936735b9f5648b59f0f6c76edbd5c8c">
                        <FontAwesomeIcon icon={faEnvelopeOpenText} size="3x" />
                        <a className={styles.link}>{coverLetterText}</a>
                    </a>
                </section>
                <section className={styles.copyrights}>
                    designed and developed by peppermint100 ⓒ Lee In Gyu
                </section>
            </div>
        </div>
    )
}

export default Footer
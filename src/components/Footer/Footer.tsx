import React from 'react'
import styles from "./Footer.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faMedium } from "@fortawesome/free-brands-svg-icons"
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <section className={styles.links}>
                    <div className={styles.linkInfo}>
                        <FontAwesomeIcon icon={faGithub} size="3x" />
                        <a target="_blank" className={styles.link} href="https://github.com/peppermint100?tab=repositories">깃허브</a>
                    </div>
                    <div className={styles.linkInfo}>
                        <FontAwesomeIcon icon={faMedium} size="3x" />
                        <a target="_blank" className={styles.link} href="https://medium.com/@krpeppermint100">블로그</a>
                    </div>
                    <div className={styles.linkInfo}>
                        <FontAwesomeIcon icon={faEnvelopeOpenText} size="3x" />
                        <a target="_blank" className={styles.link} href="https://www.notion.so/In-Gyu-Lee-s-Cover-Letter-b936735b9f5648b59f0f6c76edbd5c8c">이력서</a>
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
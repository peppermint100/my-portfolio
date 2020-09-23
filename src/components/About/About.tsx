import React, { useEffect } from 'react'
import styles from "./About.module.css"
import img from "./../../../assets/img/face.jpg"
import useQuote from '../../customs/quote/useQuote'
import QuoteType from '../../customs/types/QuoteType'
import useIntersection from '../../customs/animations/useIntersection'

const About = () => {
    const textFadeIn_1 = useIntersection<HTMLParagraphElement>({ delay: .6, duration: 1.3})
    const textFadeIn_2 = useIntersection<HTMLParagraphElement>({ delay: 1, duration: 1.3})
    const textFadeIn_3 = useIntersection<HTMLParagraphElement>({ delay: 1.5, duration: 1.3})
    const textFadeIn_4 = useIntersection<HTMLParagraphElement>({ delay: 1.5, duration: 1.3})
    const textFadeIn_5 = useIntersection<HTMLParagraphElement>({ delay: 1.5, duration: 1.3})

    const faceFadeIn = useIntersection<HTMLElement>({ delay: 1.8, duration: 1.3})


    const aboutQuote_1: QuoteType<string> = {
        korean: "안녕하세요.",
        english:"Hello"
    }
    const aboutQuote_2: QuoteType<string> = {
        korean: "새로운 기술을 배우는 게",
        english:"I'm InGyu Lee"
    }
    const aboutQuote_3: QuoteType<string> = {
        korean: "가장 즐거운",
        english:"And"
    }
    const aboutQuote_4: QuoteType<string> = {
        korean: "개발자",
        english:"I looove to learn"
    }
    const aboutQuote_5: QuoteType<string> = {
        korean: "이인규입니다.",
        english:"New Stuff"
    }

    const aboutText_1 = useQuote(aboutQuote_1)
    const aboutText_2 = useQuote(aboutQuote_2)
    const aboutText_3 = useQuote(aboutQuote_3)
    const aboutText_4 = useQuote(aboutQuote_4)
    const aboutText_5 = useQuote(aboutQuote_5)

    useEffect(() => {
        
    })

    return (
        <div className={styles.container}>
            <section className={styles.aboutText}>
                <div className={styles.textBox}>
                    <p {...textFadeIn_1}>{aboutText_1}</p>
                    <p {...textFadeIn_2}>{aboutText_2}</p>
                    <p {...textFadeIn_3}>{aboutText_3}</p>
                    <p {...textFadeIn_4}>{aboutText_4}</p>
                    <p {...textFadeIn_5}>{aboutText_5}</p>
                </div>
            </section>
            <section {...faceFadeIn} className={styles.aboutImage}>
                    <img alt="my-face" src={img} />
            </section>
        </div>
    )
}

export default About

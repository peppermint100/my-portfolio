import React from 'react'
import useQuote from '../../customs/quote/useQuote'
import QuoteType from '../../customs/types/QuoteType'
import jumboImage from "./../../../assets/img/5.jpg"
import styles from "./JumboImage.module.css"

const quote: QuoteType = {
    korean: "이인규의 웹 이력서입니다.",
    english: "Hi I'm InGyu Lee. and I'm a Web Developer"
}

const JumboImage = () => {
    const helloQuote = useQuote(quote)
    return (
        <div className={styles.container}>
            <img alt="main-image" className={styles.image} src={jumboImage} />
            <div className={styles.helloMessage}>
                {helloQuote}
            </div>
        </div>
    )
}

export default JumboImage

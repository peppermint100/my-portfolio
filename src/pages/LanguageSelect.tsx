import React from 'react'
import { useFadeIn } from '../customs/animations'
import styles from "./LanguageSelect.module.css"


const KOREAN = "KOREAN"
const ENGLISH = "ENGLISH"

interface Props {
    setLang: (lang: string) => void
}

const LanguageSelect:React.FC<Props> = ({ setLang }) => {
    const sectionFadeIn = useFadeIn<HTMLElement>({ delay : .4, duration: .8})
    const KoreanButtonFadeIn = useFadeIn<HTMLButtonElement>({ delay : .8, duration: .8})
    const EnglishButtonFadeIn = useFadeIn<HTMLButtonElement>({ delay : .8, duration: .8})
  
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <section className={styles.questions} {...sectionFadeIn}>
                    <p className={styles.question}>
                        선호하는 언어를 선택해주세요.     
                    </p>
                    <p className={styles.question}>
                        Please Select Your Preffered Language. 
                    </p>
                </section>
                <section className={styles.select}>
                    <button onClick={() => {
                        setLang(KOREAN)
                    }} {...KoreanButtonFadeIn}>
                        한국어
                    </button>
                    <button onClick={()=>{
                        setLang(ENGLISH)
                    }} {...EnglishButtonFadeIn}>
                        English 
                    </button>
                </section>
            </div>
        </div>
    )
}

export default LanguageSelect

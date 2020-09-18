import React from 'react'
import styles from "./LanguageSelect.module.css"


const KOREAN = "KOREAN"
const ENGLISH = "ENGLISH"

interface Props {
    setLang: (lang: string) => void
}

const LanguageSelect:React.FC<Props> = ({ setLang }) => {
  
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <section className={styles.questions}>
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
                    }}>
                        한국어
                    </button>
                    <button onClick={()=>{
                        setLang(ENGLISH)
                    }}>
                        English 
                    </button>
                </section>
            </div>
        </div>
    )
}

export default LanguageSelect

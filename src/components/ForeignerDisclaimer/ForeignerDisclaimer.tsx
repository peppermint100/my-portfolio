import React from 'react'
import styles from "./ForeignerDisclaimer.module.css"

const ForeignerDisclaimer = () => {
    return (
        <div className={styles.container}>
            <p className={styles.disclaimer}>
                <pre>⚠</pre>  Disclaimer for foreign viewers. I’ve never written any of english content.
       But I’ll definately write english posts when I get better at writing english.</p>
        </div>
    )
}

export default ForeignerDisclaimer

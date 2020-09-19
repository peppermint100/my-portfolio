import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <section className={styles.logo}>{"< PEPPERMINT100 />"}</section>
            <section className={styles.sideBar}>
                <aside>
                    <button className={styles.menu}>About</button>
                    <button className={styles.menu}>Stacks</button>
                    <button className={styles.menu}>Projects</button>
                    <button className={styles.menu}>
                        <span className={styles.contact}>Contact</span>
                    </button>
                </aside>
            </section>
        </div>
    )
}

export default Navbar

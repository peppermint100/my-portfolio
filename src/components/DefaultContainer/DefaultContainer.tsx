import React from 'react'
import { Navbar, Footer } from '..'
import styles from "./DefaultContainer.module.css"

const DefaultContainer = ({ children } : { children: any }) => {
    return (
        <div className={styles.container}>
            <nav>
                <Navbar />
            </nav>
                <main className={styles.content}>
                    <>
                        {children}
                    </>
                </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default DefaultContainer

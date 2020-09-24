import React from 'react'
import { Navbar, Footer } from '..'
import styles from "./DefaultContainer.module.css"

interface Props {
    children: any
    navigations: any
}

const DefaultContainer:React.FC<Props> = ({ children, navigations } ) => {
    return (
        <div className={styles.container}>
            <nav>
                <Navbar navigations={navigations} />
            </nav>
                <main className={styles.content}>
                        {children}
                </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default DefaultContainer

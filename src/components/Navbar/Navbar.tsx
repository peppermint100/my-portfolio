import { faBars, faArrowUp, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef } from 'react'
import styles from './Navbar.module.css'
import useWindowSize from "./../../customs/animations/useWindowSize"


const Navbar = () => {
    const sideBarRef = useRef<HTMLElement>(null)
    const closeButtonRef = useRef<HTMLElement>(null)

    const openSideBar = () => {
        if(sideBarRef.current && closeButtonRef.current){
            sideBarRef.current.style.transition="all 1.2s ease-in-out"
            sideBarRef.current.style.clipPath = "circle(1000px at 70% 20%)"
            closeButtonRef.current.style.opacity= "1"
            closeButtonRef.current.style.pointerEvents= "all"
        }
    }

    const closeSideBar = () => {
        if(sideBarRef.current && closeButtonRef.current){
            // sideBarRef.current.style.transition="none"
            sideBarRef.current.style.clipPath = "circle(1000px at 90% -180%)"
            closeButtonRef.current.style.opacity= "0"
            closeButtonRef.current.style.pointerEvents= "none"
        }
    }

    const { width } = useWindowSize()

    useEffect(() => {
        if(width > 768){
            closeSideBar()
        }
    }, [width]) 
    

    return (
        <div className={styles.container}>
            <section className={styles.logo}>{"< PEPPERMINT100 />"}</section>
            <section className={styles.hamburger} onClick={openSideBar} >
                <FontAwesomeIcon icon={faBars} size="3x"/>
            </section>
            <section className={styles.sideBar} ref={sideBarRef}>
                        <section className={styles.closeButton} onClick={closeSideBar} ref={closeButtonRef}>
                            <FontAwesomeIcon icon={faLocationArrow} size="3x"/>
                        </section>
                        <button className={styles.menu}>About</button>
                        <button className={styles.menu}>Stacks</button>
                        <button className={styles.menu}>Projects</button>
                        <button className={styles.menu}>
                            <span className={styles.contact}>Contact</span>
                        </button>
            </section>
        </div>
    )
}

export default Navbar

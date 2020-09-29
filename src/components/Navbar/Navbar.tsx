import { faBars, faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef } from 'react'
import styles from './Navbar.module.css'
import useWindowSize from "./../../customs/animations/useWindowSize"
import { Link } from 'react-router-dom'
import svg from "./../../../assets/logo.svg"
import { Navigations } from '../../customs/types/NavType'

interface Props{
    navigations: Navigations
}

const Navbar:React.FC<Props> = ({ navigations }) => {
    const sideBarRef = useRef<HTMLElement>(null)
    const closeButtonRef = useRef<HTMLElement>(null)

    const toAbout = () => {
       navigations.about() 
       closeSideBar()
    }
    const toSkill = () => {
       navigations.skill() 
       closeSideBar()
    }
    const toProject = () => {
       navigations.project() 
       closeSideBar()
    }


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
            <section className={styles.logo}>
                <img src={svg} alt="logo" />
            </section>
            <section className={styles.hamburger} onClick={openSideBar} >
                <FontAwesomeIcon icon={faBars} size="3x"/>
            </section>
            <section className={styles.sideBar} ref={sideBarRef}>
                        <section className={styles.closeButton} onClick={closeSideBar} ref={closeButtonRef}>
                            <FontAwesomeIcon icon={faLocationArrow} size="3x"/>
                        </section>
                        <button onClick={toAbout} className={styles.menu}>About</button>
                        <button onClick={toSkill} className={styles.menu}>Stacks</button>
                        <button onClick={toProject} className={styles.menu}>Projects</button>
                        <button className={styles.menu}>
                            <span className={styles.contact}><a href="https://www.notion.so/f4154d57e3ad48f094ed8210e5774881" target="_blank" >Contact</a></span>
                        </button>
            </section>
        </div>
    )
}

export default Navbar

import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useRef, RefObject} from 'react'
import { About, BlogPosts, DefaultContainer, ForeignerDisclaimer, JumboImage, MyProjects, SkillSet } from '../components'
import { Navigations } from '../customs/types/NavType'


const MoveToTopButton:React.FC<{navigations: Navigations}> = ({ navigations }) => {
    const toTop = () =>{
        navigations.top()
    }

    const color = "#7f8c8d"
    const buttonStyle:React.CSSProperties = {
        position:"fixed",
        right: "3%",
        bottom: "5%",
        border: `2px solid ${color}`,
        borderRadius: "7px",
        textAlign: "center",
        zIndex: 600,
        padding: ".6rem .6rem",
        color
    }
    return (
        <button style={buttonStyle} onClick={toTop}>
            <FontAwesomeIcon icon={faArrowUp} />
        </button>
    )
}

const Home = () => {
    const aboutRef = useRef<HTMLDivElement>(null)
    const skillRef = useRef<HTMLDivElement>(null)
    const projectRef = useRef<HTMLDivElement>(null)
    const topRef = useRef<HTMLDivElement>(null)

     const switchView = (ref: RefObject<HTMLDivElement>) =>{
        const { current } = ref
        if(current){
            current.scrollIntoView(true)
        }
    }

    const navigations:Navigations = {
        about: () => switchView(aboutRef),
        skill: () => switchView(skillRef),
        project: () => switchView(projectRef),
        top: () => switchView(topRef)
    }

    return (
        // navbar and footer needs to be containerizated
        <div ref={topRef} style={{width: "100vw"}}>
            <DefaultContainer navigations={navigations}>
                <MoveToTopButton navigations={navigations} />
                {/* jumbotron */}
                    <JumboImage />
                {/* about */}
                <div ref={aboutRef}>
                    <About />
                </div>
                {/* skillset */}
                <div ref={skillRef}>
                    <SkillSet />
                </div>
                {/* projects */}
                <div ref={projectRef}>
                    <MyProjects />
                </div>
                <ForeignerDisclaimer />
                {/* blog post */}
                    <BlogPosts />
            </DefaultContainer>
        </div>
    )
}

export default Home

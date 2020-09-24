import React, { RefObject, useRef } from 'react'
import { About, BlogPosts, DefaultContainer, ForeignerDisclaimer, JumboImage, MyProjects, SkillSet } from '../components'
import { Navigations } from '../customs/types/NavType'


const Home = () => {
    const aboutRef = useRef<HTMLDivElement>(null)
    const skillRef = useRef<HTMLDivElement>(null)
    const projectRef = useRef<HTMLDivElement>(null)

     const switchView = (ref: RefObject<HTMLDivElement>) =>{
        const { current } = ref
        if(current){
            current.scrollIntoView(true)
        }
    }

    const navigations:Navigations = {
        about: () => switchView(aboutRef),
        skill: () => switchView(skillRef),
        project: () => switchView(projectRef)
    }

    return (
        // navbar and footer needs to be containerizated
        <DefaultContainer navigations={navigations}>
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
    )
}

export default Home

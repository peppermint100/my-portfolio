import React, { useRef } from 'react'
import { About, BlogPosts, DefaultContainer, JumboImage, MyProjects, SkillSet } from '../components'

const Home = () => {
    const aboutRef = useRef<HTMLDivElement>(null)

    return (
        // navbar and footer needs to be containerizated
        <DefaultContainer>
            {/* jumbotron */}
                <JumboImage />
            {/* about */}
            <div ref={aboutRef}>
                <About />
            </div>
            {/* skillset */}
                <SkillSet />
            {/* projects */}
                <MyProjects />
            {/* blog post */}
                <BlogPosts />
        </DefaultContainer>
    )
}

export default Home

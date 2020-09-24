import React from 'react'
import { About, BlogPosts, DefaultContainer, JumboImage, MyProjects, SkillSet } from '../components'

const Home = () => {
    return (
        // navbar and footer needs to be containerizated
        <DefaultContainer>
            {/* jumbotron */}
                <JumboImage />
            {/* about */}
                <About />
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

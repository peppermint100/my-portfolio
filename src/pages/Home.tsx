import React from 'react'
import { About, DefaultContainer, JumboImage, MyProjects, SkillSet } from '../components'

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

        </DefaultContainer>
    )
}

export default Home

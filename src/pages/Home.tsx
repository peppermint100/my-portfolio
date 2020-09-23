import React from 'react'
import { About, DefaultContainer, JumboImage, SkillSet } from '../components'

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
            {/* blog post */}

        </DefaultContainer>
    )
}

export default Home

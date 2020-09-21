import React from 'react'
import { About, DefaultContainer, JumboImage } from '../components'

const Home = () => {
    return (
        // navbar and footer needs to be containerizated
        <DefaultContainer>
            {/* jumbotron */}
                <JumboImage />
            {/* about */}
                <About />
            {/* skillset */}
            {/* projects */}
            {/* blog post */}

        </DefaultContainer>
    )
}

export default Home

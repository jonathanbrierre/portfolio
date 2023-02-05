import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
    return (
        <div>
            <div className='profileDiv'>
                <h1>Hello!</h1>
                <img src='https://images-na.ssl-images-amazon.com/images/I/41FBm7PCIfL._US230_.jpg' alt=''></img>
                <br></br>
                <div className='textContainer'>
                    <div className='aboutText'>Thank you for taking the time to check out my website. <br></br> <br></br>
                        My name is Jonathan Brierre, and I love helping people and companies actualize their full potential.
                        If you feel I can contribute in the achievement of your goals, you can contact me <Link to='/network'>here</Link>
                        <br />
                        <br />
                        Otherwise, feel free to tap the navigation icon in the top corner and explore my free resources!

                        <h3>Featured Press:</h3>
                        <a href="https://miamiwire.com/from-ego-to-enlightenment-jonathan-brierres-quest-for-inner-peace-and-the-path-to-helping-others/" target="_blank">The Miami Wire</a>
                        <br />
                        <br />
                        <a href="https://thechicagojournal.com/jonathan-brierre-carves-a-path-to-happiness/" target="_blank">The Chicago Journal</a>
                        <br />
                        <br />
                        <a href="https://newyorkbusinessnow.com/exclusive-interview-with-jonathan-brierre/" target="_blank">New York Business Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

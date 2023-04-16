import React from 'react'
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div>
            <div className='profileDiv'>
                <h1>Hello!</h1>
                <img src='https://images-na.ssl-images-amazon.com/images/I/41FBm7PCIfL._US230_.jpg' alt=''></img>
                <br></br>
                <div className='textContainer'>
                    <div className='aboutText'>Thank you for taking the time to check out this website I built with JavaScript! <br></br> <br></br>
                        My name is Jonathan Brierre, and I love helping people and companies actualize their full potential.
                        <br />
                        <br />
                        As I have many skills and capabilities, I have decided to keep this site simple.
                        <br />
                        <br />
                        For more on my backstory, check out the Featured Articles section below!
                        <br />
                        <br />
                        For speaking engagements, meditation coaching/consulting, or software consulting, book a call <a href='https://calendly.com/jonathanbrierre/one-on-one'>here</a> and leave a note describing your intention to meet.
                        <br />
                        <br />
                        To get a copy of my book, find it <Link to={"handbook"} onClick={() => document.querySelector('.App').scrollTo(0, 0)}>here.</Link>
                        <br />
                        <br />
                        If you want me to consult your company or brand for press releases, book a call <a href='https://calendly.com/jonathanbrierre/reactive-discovery-call'>here.</a>
                        <br />
                        <br />
                        Otherwise, feel free to tap the navigation icon in the top corner and explore my free resources!

                        <h3>Featured Articles:</h3>
                        <a href="https://miamiwire.com/from-ego-to-enlightenment-jonathan-brierres-quest-for-inner-peace-and-the-path-to-helping-others/" target="_blank" rel="noopener noreferrer">The Miami Wire</a>
                        <br />
                        <br />
                        <a href="https://thechicagojournal.com/jonathan-brierre-carves-a-path-to-happiness/" target="_blank" rel="noopener noreferrer">The Chicago Journal</a>
                        <br />
                        <br />
                        <a href="https://newyorkbusinessnow.com/exclusive-interview-with-jonathan-brierre/" target="_blank" rel="noopener noreferrer">New York Business Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About

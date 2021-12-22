import React, { Component } from 'react'
import NavBar from '../NavBar'

class Contact extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className = 'contactDiv contentContainer' >
                    <h1> Contact Info</h1>
                    <h3>Email:</h3> jonathanbrierre33@gmail.com
                    <h3>Phone :</h3> (347) 572-9598
                    <br></br>
                    <br></br>
                    <a href = 'https://www.linkedin.com/in/jonathan-brierre-674251140/'  rel="noopener noreferrer" target= '_blank'> <h3>Linked In</h3></a>
                    <br></br>
                    <a href = 'https://medium.com/@jonathanbrierre' rel="noopener noreferrer" target = '_blank'><h3>Medium Blog</h3></a>
                    <br></br>
                    <a href = 'https://www.amazon.com/Jonathan-Brierre/e/B07YHVJ6X3?ref_=dbs_p_ebk_r00_abau_000000' rel="noopener noreferrer" target = '_blank'><h3>Buy My Book!</h3></a>
                    <br></br>
                    <a href = 'https://github.com/jonathanbrierre' rel="noopener noreferrer" target = '_blank'><h3>GitHub Profile</h3></a>
                    <br></br>
                    
                </div>
            </div>
        )
    }
}

export default Contact

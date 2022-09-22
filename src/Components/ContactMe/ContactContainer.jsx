import React, { Component } from 'react'
import NavBar from '../NavBar'

class Contact extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <div className = 'contactDiv contentContainer' >
                    <h1> Network With Me!</h1>
                    <h4>Click or tap something to do. </h4>
                    <br></br>
                    <a href = 'https://calendly.com/jonathanbrierre/one-on-one'  rel="noopener noreferrer" target= '_blank'> <h3>Book a call</h3></a>
                    <br></br>
                    <a href = 'https://www.amazon.com/Jonathan-Brierre/e/B07YHVJ6X3?ref_=dbs_p_ebk_r00_abau_000000' rel="noopener noreferrer" target = '_blank'><h3>Buy my book for a dollar</h3></a>
                    <br></br>
                    <a href = 'https://dot.cards/jonathanbrierre?a=user%2Fjxdazichkhxiqtwcef3mifi6a%2Fc%2Fbl' rel="noopener noreferrer" target = '_blank'><h3>Business card</h3></a>
                    <br></br>

                    <h4>It's always a pleasure to be of great service</h4>
                </div>
            </div>
        )
    }
}

export default Contact

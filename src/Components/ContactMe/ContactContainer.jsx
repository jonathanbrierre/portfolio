import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import Swal from 'sweetalert2'

class Contact extends Component {

    renderAlert = () => {
        Swal.fire({
            title: 'Success!',
            text: 'I will get back to you as soon as I can!',
            icon: 'success',
            confirmationButtonText: 'close'
        })
    }


    render() {
        return (
            <div>
                <div className = 'contactDiv contentContainer' >
                    {/*<h2 className="waitlist-header">Join queue for a FREE consultation or coaching call!</h2>*/}
                    {/*<button className="waitlist-button" onClick={this.renderAlert}>Join Queue</button>*/}
                    <a className="book-call-button" role="button" href = 'https://calendly.com/jonathanbrierre/one-on-one'  rel="noopener noreferrer" target= '_blank'> <h3>Click here to book a FREE 1-hour coaching/consulting call</h3></a>
                    <h1>7 Principles to Manifestation</h1>
                    <ReactPlayer url="https://www.youtube.com/watch?v=Yph_ty-Eq1Q" width='337px' height='540px'/>
                    <br/>
                    <a href = 'https://www.amazon.com/Jonathan-Brierre/e/B07YHVJ6X3?ref_=dbs_p_ebk_r00_abau_000000' rel="noopener noreferrer" target = '_blank'><h3>Find my book on Amazon</h3></a>
                </div>
            </div>
        )
    }
}

export default Contact

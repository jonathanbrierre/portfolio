import React from 'react'
import "./Affiliate.css"

const AFFILIATES = {
    "staiberconsulting": {
        companyName: "Staiber Consulting",
        imgClass: 'staiber-consulting'
    }
}

function AffilitatePage({ match }) {

    const affiliateKey = match.params.partner;

    return (
        <div className='affiliate-page contentContainer'>
            <div className='affiliate-header__container'>
                <div className='affiliate-partner-header'>
                    <h1>{AFFILIATES[affiliateKey].companyName}</h1>
                </div>
                <div className='affiliate-x'>
                    <h1>&</h1>
                </div>
                <div className='my-company'>
                    <h1>Reactive Consulting </h1>
                </div>
            </div>
            <div className='brand-logos'>
                <div className={`brand-logo affiliate-logo ${AFFILIATES[affiliateKey].imgClass}`} />
                <div className="brand-logo my-logo" />
            </div>
            <div className='affiliate-cta'>
                {AFFILIATES[affiliateKey].companyName} has partnered with Reactive Consulting in order to provide automated press services. Our team of writers has helped coutless founders get featured in news outlets like Yahoo, New York Weekly, Business Insider, and many more! When you proceed to book the call to meet, be sure to include a note saying you took advantage of this specific partnership. Thank you!
                <br />
                <br />
                <a href="https://calendly.com/jonathanbrierre/reactive-discovery-call" target="_blank" rel="noopener noreferrer">
                    <button className='affiliate-cta__button'>Book a Reactive Discovery Call</button>
                </a>
            </div>
        </div>
    )
}

export default AffilitatePage
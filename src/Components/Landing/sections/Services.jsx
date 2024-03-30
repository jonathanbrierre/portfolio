import React from 'react'

function Services() {
    return (
        <div className='services__container copy-container'>
            <h2 className='services-header'>Services</h2>
            <div className='services' >
                <div className='services__row-one'>
                    <div className='service' >
                        <h3 className='service-header'>Life Coaching & <br /> Meditation Consulting</h3>
                        <div className='mountain-man__container img-box'>
                            <div className="mountain-man" />
                        </div>
                    </div>
                    <div className='service' >
                        <h3 className='service-header'>Public Speaking & <br /> Corporate Workshops</h3>
                        <div className='microphone__container img-box'>
                            <div className="microphone" />
                        </div>
                    </div>
                </div>
                <div className='services__row-two'>
                    <div className='service' >
                        <h3 className='service-header'>Marketing & <br /> Brand Consulting</h3>
                        <div className='map__container img-box'>
                            <div className="map" />
                        </div>
                    </div>
                    <div className='service' >
                        <h3 className='service-header'>Full Stack Software <br /> Development</h3>
                        <div className='laptop__container img-box'>
                            <div className="laptop" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
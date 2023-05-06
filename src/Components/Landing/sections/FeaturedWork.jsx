import React from 'react'
import { withRouter } from "react-router-dom";

function FeaturedWork({ history }) {

    const handleNavigation = (route) => {
        const path = `/${route}`;
        history.push(path);
        document.querySelector('.App').scrollTo(0, 0)
    }
    return (
        <div className='featured-work copy-container'>
            <div className='featured-header'><h2>Featured Work</h2></div>
            <div className='featured-meditations__container'>
                <div className='text-container'>
                    <h3>Free Guided Meditation Catalog</h3>
                    <br />
                    <br />
                    <button onClick={() => handleNavigation('meditations')}>BREATHE WITH ME</button>
                </div>
                <div className='meditations-image__container'>
                    <div className='meditations-image' />
                </div>
            </div>
            <div className='featured-book__container'>
                <div className='book-image__container'>
                    <div className='book-image' />
                </div>
                <div className="text-container">
                    <h3>A Short Handbook For Happiness</h3>
                    <br />
                    <br />
                    <p>"Simple and Impactful"</p>
                    <br />
                    <h4 className='nyweekly-tag'>~ New York Weekly</h4>
                    <button onClick={() => handleNavigation('handbook')} >PREVIEW</button>
                </div>
            </div>

        </div>
    )
}

export default withRouter(FeaturedWork)
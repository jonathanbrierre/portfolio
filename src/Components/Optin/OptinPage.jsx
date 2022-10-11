import React, { useState } from 'react'
import { Modal } from 'semantic-ui-react'
import logo from '../../images/rc-logo.png'

function OptinPage () {

	const [openModal, setOpenModal] = useState(false)

	const handleButtonClick = () => {
		setOpenModal(true)
	}

	return (
		<div className="optin-page">
			<div className="optin-header">
				<div className='person-box'/>
				<div className='person-info'>
					<div className='person-name-container'>
						<h2 className="person-name">Jonathan Brierre</h2>
					</div>
					<div className="person-credentials">
						<p>Manifestation Coach</p>
						<p>Amazon Best-Selling Author</p>
						<p>CEO and Engineer</p>
						<p>Over 2300+ served and impacted</p>
					</div>
					<div className='button-container'>
						<button className="book-btn" onClick={handleButtonClick}>Book a Call</button>
					</div>
				</div>
			</div>

			<div className="optin-footer">
				It's always a pleasure to be of great service
				<img src={logo} className="optin-logo" alt='rc-logo'/>
			</div>
			<Modal open={openModal} className="optin-modal">
				<iframe
					title='optin-form'
				  className='optin-form'
				  width='360px' 
				  height='500px' 
				  src='https://bigin.zoho.com/crm/WebFormServeServlet?rid=b7dfd08b35e3d8115d634cdf7abff466ea28cab76d8846c4b2ee0003855cdcebgid9a62b4f40c66987151c52f1385ca0504b272129bf4e10cebf4bd19c27d10f635'
				 />
			</Modal>
		</div>
	)
}

export default OptinPage

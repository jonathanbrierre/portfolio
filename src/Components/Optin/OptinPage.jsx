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
						<p>Learn how 2500+ people have leveraged my system to radically transform their lives</p>
						<p>Sign up below to get a system overview, plus a FREE coaching call to begin integrating it!</p>
					</div>
					<div className='button-container'>
						<button className="book-btn" onClick={handleButtonClick}>Click Me to Sign Up</button>
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
				  height='570px' 
				  src='https://bigin.zoho.com/crm/WebFormServeServlet?rid=b7dfd08b35e3d8115d634cdf7abff466ea28cab76d8846c4b2ee0003855cdcebgid9a62b4f40c66987151c52f1385ca0504b272129bf4e10cebf4bd19c27d10f635'
				 />
			</Modal>
		</div>
	)
}

export default OptinPage

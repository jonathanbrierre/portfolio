import React from 'react';
import Meditation from './Meditation';
import Breakdown from './Breakdown';

const MethodPage = ({location, history, match}) => {

	const renderMainComponent = () => {
		const {view} = match.params;

		if (view === 'breakdown') {
			return <Breakdown/>
		}

		if (view === 'meditation') {
			return <Meditation/>
		}
	}

	const handleButtonClick = () => {
		const {view} = match.params;

		if (view === 'breakdown') {
			history.push('/method/meditation')
		}

		if (view === 'meditation') {
			history.push('/method/breakdown')
		}
	}

	const generateButtonText = () => {
		const {view} = match.params;

		if (view === 'breakdown') {
			return "View Meditation"
		} 

		if (view === 'meditation') {
			return "View Breakdown"
		}

	}

	return (
		<div className="method-page contentContainer">
			<h2>5 Times a Day Method!</h2>

			<button onClick={handleButtonClick} class="meditation-toggle">{generateButtonText()}</button>
			{renderMainComponent()}
		</div>
		)
};

export default MethodPage
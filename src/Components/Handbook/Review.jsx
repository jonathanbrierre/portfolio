import React from 'react';
import { BsFillStarFill } from "react-icons/bs";

export default ({review}) => {
	return (
		<div className="review">
			<div className='rev-left-container'>
				<div className='stars'>
					<BsFillStarFill color="gold"/>
					<BsFillStarFill color="gold"/>
					<BsFillStarFill color="gold"/>
					<BsFillStarFill color="gold"/>
					<BsFillStarFill color="gold"/>
				</div>
				<div className='rev-title'>
					<h3>{review.title}</h3>
				</div>
			</div>
			<div className='rev-description'>
				 <p>{review.review}</p>
				 <a href={review.link} target='_blank' rel='noopener noreferrer'>View Source</a>
			</div>
		</div>
		)
}
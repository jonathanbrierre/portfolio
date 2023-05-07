import React from 'react';
import bookImg from '../../images/book.png'
import CTA from './ctaButton';
import Review from './Review';

const reviews = [
	{
		title: 'An excellent well worth read',
		review: 'This book is an easy read and is filled with a lot of wisdom. I myself have incorporated some of the activities suggested within the book into my daily routine. For anyone that is struggling to find some sort happiness within life on any level or if you have already developed a sense of happiness for yourself I strongly suggest getting this book and giving it a read.',
		link: 'https://www.amazon.com/gp/customer-reviews/R34ZQYO846STXE/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=1697176372'
	},
	{
		title: 'An Ode to Deconditioning and Self-Actualization',
		review: 'Super great book. A quick and captivating read that prompts you to assess and deconstruct your own conditioning as well as assume a mindframe that fully allows you to embrace happiness as a continually functioning facility of life opposed to a fleeting emotion to be chased after. It’s a super insightful and very clear read, I have recommended to several other people.',
		link: 'https://www.amazon.com/gp/customer-reviews/R26GMCD1CJKSH/ref=cm_cr_srp_d_rvw_ttl?ie=UTF8&ASIN=1697176372'
	},
	{
		title: 'Concrete advice on developing more happiness in your life',
		review: 'Terrific short book on the disciplines of a modern Stoic. He brings new life to the 3 pillars of Stoicism. The author also incorporates wisdom literature from well established faith traditions. But its mostly Stoic ideas and how he practices them along with scientific studies supporting his conclusions. We need more books like this: concise, precise, information packed and rooted in the authors authentic first hand experience.',
		link: 'https://www.amazon.com/gp/customer-reviews/R36917U2W207Q6/ref=cm_cr_dp_d_rvw_ttl?ie=UTF8&ASIN=1697176372'
	}
]

const HandbookPage = (props) => {

	const generateReviews = () => {
		return reviews.map(r => <Review review={r} />)
	}

	return (
		<div className='bl-container'>
			<div className='blh-header'>
				<div className='blh-image'>
					<img src={bookImg} alt="" className="book-img" />
				</div>
				<div className='blh-description-container'>
					<CTA />
					<div className='blh-description'>
						In a world where the majority of us suffer incessantly and unnecessarily, this book was written as a means to give light to a pathway to happiness that most of us are unaware of. A Short Handbook for Happiness is a reading that delves into The Philosophy of Stoicism, Buddhism, contemporary psychology and neuroscience. The goal of this book is to help stimulate a contemplative journey towards lasting happiness and fulfillment. How do we achieve these things? Read the book and find out!
					</div>
				</div>
			</div>
			<div className='bl-body'>
				<div className='reviews-container'>
					<h2>Reviews</h2>
					{generateReviews()}
				</div>
				<div className="bl-quotes">
					<h2>Quotes From The Book</h2>
					<div className='quotes-container'>
						<p>From our traumas, we often proceed to create limiting beliefs about ourselves, others, or the world generally that reflect more so about the individual negative experience than the true nature of human consciousness and how it manifests. As we hold onto these limiting beliefs, we too hold onto the lenses they give us to percieve the world. And as long as we continue to percieve the world in a certain way, we will continue to manifest an experience of life that would reflect our perceptions. As within, so without. </p>
						<p>Without acknowledging our past pains, we inevitably will share them with others. Without acknowledging our limiting beliefs, thinking positively and healthily is something that can be out of reach for most. Without acknowledging our egos, our lives become unfulfilling and void of long-lasting peace. </p>
						<p>The time for us to take control of our lives is now.</p>
					</div>
				</div>
				<div className='final-cta'>
					<a href="https://www.amazon.com/Short-Handbook-Happiness-Jonathan-Brierre/dp/1697176372" target='_blank' rel='noopener noreferrer'>Find Book on Amazon</a>
					<a href="https://www.jonathanbrierre.co/optin" target='_blank' rel='noopener noreferrer'>Schedule a FREE 1 Hour Consultation With Me</a>
				</div>
			</div>
		</div>
	)
};

export default HandbookPage;

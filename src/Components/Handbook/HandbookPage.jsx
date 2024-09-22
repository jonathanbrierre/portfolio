import React from 'react';
import shortHandbookImg from '../../images/short-handbook.png'
import streamlinedMarketingImg from '../../images/streamlined-marketing.png'
import grandButterfliesImg from '../../images/grand-butterflies.jpg'
import styled from 'styled-components'

const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 20vh;
	text-align: center;
	margin-top: 50px;
`

const Header = styled.h1`
	font-size: 2.5em;
	color: #333;
	font-weight: 600;
	padding: 20px;
`

const BookContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 20px;
	padding: 40px;
`

const BookImage = styled.img`
	width: 310px;
	height: 500px;
`

const BookTitle = styled.h2`
	text-align: center;
`

const BookDescription = styled.p`
	text-align: center;
`

const CTAButton = styled.button`
	background-color: #333;
	color: #fff;
	padding: 10px 20px;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	margin-top: 10px;
	transition: all 0.3s ease-in-out;
	&:hover {
		background-color: #555;
	}
`

const books = [
	{
		title: 'Streamlined Marketing: Brand Strategy Simplified and Scaled',
		image: streamlinedMarketingImg,
		description: "This book demystifies the evolving complexities of modern marketing, offering a clear, actionable guide to brand strategy in the digital era. As businesses grapple with the rapid advancements in AI, social media, and digital commerce, this book provides the essential insights needed to navigate the shifting landscapes. From developing a nuanced marketing plan to creating impactful campaigns without the fluff of traditional marketing firms, this book reveals how to connect authentically with your audience and scale your brand effectively. Whether you're a business owner disillusioned by past marketing failures or a marketer seeking to refine your strategies, this book equips you with the tools to foster a powerful, pervasive online presence and realign your marketing efforts for measurable success. Step into a new age of marketing with a strategic blueprint tailored for today’s digital challenges and opportunities.",
		link: "https://www.amazon.com/Streamlined-Marketing-Strategy-Simplified-Scaled/dp/B0D9PFTNJY?ref_=ast_author_dp"
	},
	{
		title: 'A Short Handbook For Happiness',
		image: shortHandbookImg,
		description: "In a world where the majority of us suffer incessantly and unnecessarily, this book was written as a means to give light to a pathway to happiness that most of us are unaware of. A Short Handbook for Happiness is reading that delves into The Philosophy of Stoicism. It's a philosophy much like Buddhism in the sense that it focuses on bringing forth happiness and fulfillment from within ourselves. How do we achieve this? Read the book and find out!",
		link: "https://www.amazon.com/Short-Handbook-Happiness-Jonathan-Brierre/dp/1697176372"
	},
	{
		title: "The Grand Butterfly Gathering: Wings of Change for a Transformed World ",
		image: grandButterfliesImg,
		description: "In 'The Grand Butterfly Gathering: Wings of Change for a Transformed World,' a diverse group of authors share their profound stories of personal transformation, resilience, and the power of unified intention. Despite facing immense hardships, these individuals refused to be defined by their struggles, instead using them as catalysts for growth and self-reflection. Through their chapters, readers will witness the incredible capacity of the human spirit to overcome adversity and emerge stronger, wiser, and more connected to the world around them.The book's journey begins with several of the authors' transformative trip to Costa Rica in February 2024, where seven strangers united to set the intention for a global event on June 29th, aimed at spreading peace and love. Through vulnerability, shared stories, and dreams, they formed an unbreakable bond and became a mastermind with a common vision.",
		link: "https://www.amazon.com/Grand-Butterfly-Gathering-Change-Transformed-ebook/dp/B0D7ZWDL43"
	},
]

const renderBooks = () => {
	return books.map((book, index) => {
		return (
			<BookContainer key={index}>
				<BookImage src={book.image} alt={book.title} />
				<BookTitle>{book.title}</BookTitle>
				<BookDescription>{book.description}</BookDescription>
				<a href={book.link}>
					<CTAButton>Buy on Amazon</CTAButton>
				</a>
			</BookContainer>
		)
	})
}

const HandbookPage = (props) => {


	return (
		<PageContainer>
			<HeaderContainer>
				<Header>
					The following are the books I have written and coauthored over the years.
				</Header>
			</HeaderContainer>
			{renderBooks()}
		</PageContainer>
	)
};

export default HandbookPage;

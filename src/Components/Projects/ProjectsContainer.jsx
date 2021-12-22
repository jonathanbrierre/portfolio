import React from 'react'
import NavBar from '../NavBar'
import Project from './Project'

class ProjectsContainer extends React.Component{

    state = {
        projects: [
            {
                id: 7,
                name: 'Agile Clock (Integral Agile)',
                description: 'An interactive clock showcasing phases of team and organizational management.',
                technologiesUsed: ['React Hooks', 'Redux Hooks', 'SASS'],
                liveDemo: 'https://integralagile.com/holons/cadence'
            },
            {
                id: 6,
                name: 'Feelings Web (Leap Forward Community)',
                description: "A mobile friendly app to share your feelings! (Be sure to watch the demo video to see the chrome extension functionality)",
                technologiesUsed: ['React', 'Context API', 'React Native', 'Mapbox GL', 'Ruby on Rails', 'Chrome Extension API'],
                liveDemo: 'https://wefeel.pause.us/',
                videoDemo: 'https://www.youtube.com/watch?v=aMtFDWzsazU'
            },
            {
                id: 8,
                name: 'Agile Dezign (Integral Agile)',
                description: 'The Agile management tool of the future. (Launch early 2022!)',
                technologiesUsed: ['React', 'Redux', 'Websockets', 'Ruby On Rails', "Redis", "Sidekiq"],
                preview: 'https://integralagile.com/agile-dezign'
            },
            {
                id: 4,
                name: 'Pineapple Express',
                description: 'A super exclusive pineapple apparel store.',
                disclaimer: 'As this application loads from a Heroku server, expect a brief wait while the app initially loads. Best viewed on desktop',
                technologiesUsed: ['Ruby on Rails', 'HTML/CSS', 'BCrypt Cookie Authentication', 'Action Mailer'],
                gitHubLink: 'https://github.com/jonathanbrierre/Pineapple-Express',
                liveDemo: 'https://pineapple-express.herokuapp.com/',
                videoDemo: 'https://www.youtube.com/watch?v=inwS2mZT8SU'
            },
            {
                id: 1, 
                name: 'The Youniverse',
                description: 'A space-themed social media application centered around promoting emotional intelligence',
                technologiesUsed: ['React', 'Redux', 'React Router','Semantic UI React', 'Websockets/ActionCable', 'Ruby on Rails', 'JWT Token Authentication'],
                frontGitHubLink: 'https://github.com/jonathanbrierre/TheYouniverse-Front',
                backGitHubLink: 'https://github.com/jonathanbrierre/TheYouniverse-Back',
                liveDemo: null,
                videoDemo: 'https://www.youtube.com/watch?v=93rDLcB3dKI&t=5s'
            },
            { 
                id: 3,
                name: "Your Team's Time",
                description: "A minimalist app built so managers and team leaders can create their team's weekly schedules on a spreadhseet",
                disclaimer: 'Use desktop version for full spreadsheet functionality.',
                technologiesUsed: ['React', 'Ruby on Rails', 'React Router', 'JWT Token Authentication', 'React Datasheet'],
                frontGitHubLink: 'https://github.com/rexy91/mod4projectHR-frontend',
                backGitHubLink: 'https://github.com/rexy91/mod4ProjectHR-backend',
                liveDemo: 'https://yourteamtime.netlify.com/',
                videoDemo: null
            },
            {
                id: 5,
                name: "Read'n Review",
                description: "An application where a user can submit books they have read in order to leave reviews on them",
                technologiesUsed: ['JavaScript', 'HTML/CSS', 'Ruby on Rails'],
                gitHubLink: 'https://github.com/elikantor/Read-n-Review',
                liveDemo: 'https://read-n-review-frontend.herokuapp.com/',
                videoDemo: 'https://www.youtube.com/watch?v=vBrI-09MMok&t=1s'
            },
            {
                id: 2,
                name: 'Stocks App',
                description: "A mock stock buying application where a user searches for live stocks to be added to a portfolio and audit pages",
                technologiesUsed: ['React', 'Redux', 'React Router', 'Ruby on Rails', 'Semantic UI React', 'JWT Token Authentication', 'IEXCloud API'],
                gitHubLink: 'https://github.com/jonathanbrierre/Stocks-TechTalent',
                liveDemo: 'https://nycttp-stocks.netlify.com/',
                videoDemo: 'https://youtu.be/f0PQrx_FJJY'
            }
        ]
    }

    renderProjects = () => {
        return this.state.projects.map(project => <Project key = {project.id} project = {project}/>)
    }


    render(){
        return (
            <div>
                <NavBar/>
                <div className = 'contentContainer'>
                    {this.renderProjects()}
                    <div style={{padding: '3vh'}}></div>
                    <footer style ={{color: 'white', backgroundColor:'black', textAlign: 'center', padding: '1vh', position:'fixed', zIndex: '2', left: '0', bottom: '0', width: '100%' }}> <p>This site was built using React, React Router, CSS, and Semantic UI React</p></footer>
                </div>
            </div>
    )}
}

export default ProjectsContainer

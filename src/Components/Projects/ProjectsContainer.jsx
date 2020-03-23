import React from 'react'
import NavBar from '../NavBar'
import Project from './Project'

class ProjectsContainer extends React.Component{

    state = {
        projects: [ 
            {
                id: 1, 
                name: 'The Youniverse',
                description: 'This is a space-themed social media application centered around promoting emotional intelligence.',
                technologiesUsed: ['React', 'Redux', 'React Router','Semantic UI React', 'Websockets/ActionCable', 'Ruby on Rails', 'JWT Token Authentication'],
                frontGitHubLink: 'https://github.com/jonathanbrierre/TheYouniverse-Front',
                backGitHubLink: 'https://github.com/jonathanbrierre/TheYouniverse-Back',
                liveDemo: null,
                videoDemo: 'https://www.youtube.com/watch?v=93rDLcB3dKI&t=5s'
            },
            {
                id: 2,
                name: 'Stocks App',
                description: "A mock stock buying application where a user searches for stocks to be added to a portfolio",
                technologiesUsed: ['React', 'Redux', 'React Router', 'Ruby on Rails', 'Semantic UI React', 'JWT Token Authentication', 'IEXCloud API'],
                gitHubLink: 'https://github.com/jonathanbrierre/Stocks-TechTalent',
                liveDemo: 'https://nycttp-stocks.netlify.com/'
            },
            {   
                id: 3,
                name: "Your Team's Time",
                description: "A minimalist app built so managers and team leaders can create their team's weekly schedules on a spreadhseet",
                technologiesUsed: ['React', 'Ruby on Rails', 'React Router', 'JWT Token Authentication', 'React Datasheet'],
                frontGitHubLink: 'https://github.com/rexy91/mod4projectHR-frontend',
                backGitHubLink: 'https://github.com/rexy91/mod4ProjectHR-backend',
                liveDemo: 'https://yourteamtime.netlify.com/',
                videoDemo: null
            },
            {
                id: 4,
                name: 'Pineapple Express',
                description: 'Just your average ordinary pineapple-themed apparel store.',
                technologiesUsed: ['Ruby on Rails', 'HTML/CSS', 'BCrypt Cookie Authentication', 'Action Mailer'],
                gitHubLink: 'https://github.com/jonathanbrierre/Pineapple-Express',
                liveDemo: 'https://pineapple-express.herokuapp.com/',
                videoDemo: 'https://www.youtube.com/watch?v=inwS2mZT8SU'
            },
            {
                id: 5,
                name: "Read'n Review",
                description: "An application where a user can submit books they have read in order to leave reviews on them",
                technologiesUsed: ['JavaScript', 'HTML/CSS', 'Ruby on Rails'],
                gitHubLink: 'https://github.com/elikantor/Read-n-Review',
                liveDemo: 'https://read-n-review-frontend.herokuapp.com/',
                videoDemo: 'https://www.youtube.com/watch?v=vBrI-09MMok&t=1s'
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
                {this.renderProjects()}
            </div>
    )}
}

export default ProjectsContainer

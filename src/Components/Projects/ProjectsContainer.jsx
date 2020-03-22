import React from 'react'
import NavBar from '../NavBar'
import Project from './Project'

class ProjectsContainer extends React.Component{

    state = {
        projects: [ 
            {id: 1, 
            name: 'The Youniverse',
            description: 'This is a space-themed social media application centered around promoting emotional intelligence.',
            technologiesUsed: ['React', 'Redux', 'Semantic UI React', 'Websockets/ActionCable', 'Ruby on Rails', 'JWT Token Authentication'],
            frontGitHubLink: 'https://github.com/jonathanbrierre/TheYouniverse-Front',
            backGitHubLink: 'https://github.com/jonathanbrierre/TheYouniverse-Back',
            liveDemo: null,
            videoDemo: 'https://www.youtube.com/watch?v=93rDLcB3dKI&t=5s'
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

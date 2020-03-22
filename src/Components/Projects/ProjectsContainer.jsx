import React from 'react'
import NavBar from '../NavBar'
import Project from './Project'

class ProjectsContainer extends React.Component{

    state = {
        projects: [ {id: 1}, {id:2}]
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

import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


class Project extends Component {
    render() {
        let {name, description, technologiesUsed, frontGitHubLink, backGitHubLink, liveDemo, videoDemo, gitHubLink, disclaimer } = this.props.project 
        return (
            <div style = {{textAlign: 'center'}}>
                <br></br>
                <div style ={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
                    <Card fluid className ='projectCard'>
                        <Image  wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>{name}</Card.Header>
                        <br></br>
                        <Card.Meta>
                            <span className='date'>{description}</span>
                        </Card.Meta>
                        <br></br>
                        <Card.Description>
                            <h4>Technologies Used:</h4> {technologiesUsed.join(', ')}
                        </Card.Description>
                        <br></br>
                        {disclaimer ? <div><em>Disclaimer:</em> The live demo, being hosted on Heroku, will take about 15 seconds to load. Best viewed on Desktop </div>: null}
                        </Card.Content>
                        <Card.Content extra>
                        {frontGitHubLink ? <a href = {frontGitHubLink} rel="noopener noreferrer" target = '_blank'>
                            Frontend Repo
                        </a>: null} {' '}{' '}
                        {gitHubLink ? <a href = {gitHubLink} rel="noopener noreferrer" target = '_blank'>
                            GitHub Repo
                        </a>: null} {' '}{' '}
                        {backGitHubLink ? <a href = {backGitHubLink}  rel="noopener noreferrer" target = '_blank'>
                            Backend Repo
                        </a>:null} {' '}{' '}
                        {liveDemo ? <a href = {liveDemo} rel="noopener noreferrer" target = '_blank' style ={{display:'inline-block'}} >
                            Live Demo
                        </a>:null}{' '}{' '}
                        {videoDemo ? <a href = {videoDemo} target = '_blank' rel="noopener noreferrer" style ={{display:'inline-block'}} >
                            Video Demo 
                        </a>:null}
                        
                        </Card.Content>
                    </Card>
                </div>
                <br></br>
            </div>
        )
    }
}

export default Project

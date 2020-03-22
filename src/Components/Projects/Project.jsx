import React, { Component } from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'


class Project extends Component {
    render() {
        console.log(this.props)
        let {name, description, technologiesUsed, frontGitHubLink, backGitHubLink, liveDemo, videoDemo } = this.props.project 
        return (
            <div style = {{textAlign: 'center'}}>
                <div style ={{width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
                    <Card fluid className ='projectCard'>
                        <Image src='https://media1.tenor.com/images/642302f2c212571f2b82128bd961c34e/tenor.gif?itemid=9978863' wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>{name}</Card.Header>
                        <Card.Meta>
                            <span className='date'>{description}</span>
                        </Card.Meta>
                        <Card.Description>
                            <h4>Technologies Used:</h4> {technologiesUsed.join(', ')}
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        {frontGitHubLink ? <a href = {frontGitHubLink} rel="noopener noreferrer" target = '_blank'>
                            Frontend Repo
                        </a>: null} {' '} {' '}
                        {backGitHubLink ? <a href = {backGitHubLink}  rel="noopener noreferrer" target = '_blank'>
                            Backend Repo
                        </a>:null} {' '}{' '}
                        {liveDemo ? <a href = {liveDemo} rel="noopener noreferrer" target = '_blank'>
                            Live Demo
                        </a>:null}{' '}{' '}
                        {videoDemo ? <a href = {videoDemo} target = '_blank'>
                            Video Demo 
                        </a>:null}
                        </Card.Content>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Project

import React, { Component } from 'react'
import {Modal, Header, Image, Button} from 'semantic-ui-react'

class BookModal extends Component {



    render() {
        return (
        <Modal open={this.props.open}>
            <Modal.Header>{this.props.title}</Modal.Header>
            <Modal.Content image>
            <Image wrapped size='medium' src={this.props.bookData.imageLinks.thumbnail} />
            <Modal.Description>
                <Header>Written by {this.props.bookData.authors.join(', ')} </Header>
                <strong>Description:</strong> {this.props.bookData.description} <br></br> <br></br>
                <Button style ={{backgroundColor: 'red', color:'black'}}onClick = {this.props.closeModal}>Close</Button>
            </Modal.Description>
            </Modal.Content>
        </Modal>
            
        )
    }
}

export default BookModal

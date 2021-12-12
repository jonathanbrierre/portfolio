import React, { Component } from 'react'
import {Modal, Header, Image, Button} from 'semantic-ui-react'

class BookModal extends Component {


    bookImage = () => {
        if(this.props.bookData.imageLinks=== undefined){
            return 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fhazlitt.net%2Ffeature%2Fusers-guide-kazuo-ishiguro&psig=AOvVaw2ly5rvf2hdF-vdx73C62Gh&ust=1590523015180000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKj-xozmz-kCFQAAAAAdAAAAABAI'
        }else{
            return this.props.bookData.imageLinks.thumbnail
        }
    }


    render() {
        return (
        <Modal open={this.props.open}>
            <Modal.Header style={{display: 'flex', justifyContent: 'space-between'}}>{this.props.title}
              <Button style ={{backgroundColor: 'red', color:'black'}}onClick = {this.props.closeModal}>Close</Button>
            </Modal.Header>
            <Modal.Content image>
            <Image wrapped size='big' src={this.bookImage()} />
            <Modal.Description>
                <Header>Written by {this.props.bookData.authors ? this.props.bookData.authors.join(', '):this.props.authors} </Header>
                <strong>Description:</strong> {this.props.bookData.description} 
                <br></br> 
                <br></br>
                <a href ={this.props.bookData.infoLink} target = '_blank' rel="noopener noreferrer">More Info</a>
                <br></br>
                <br></br>
            </Modal.Description>
            </Modal.Content>
        </Modal>
            
        )
    }
}

export default BookModal

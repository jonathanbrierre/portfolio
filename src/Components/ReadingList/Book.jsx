import React, { Component } from 'react'
import BookModal from './BookModal'

class Book extends Component {

    state = {
        open: false,
        bookData: {
            authors: [],
            title: '',
            description:'',
            imageLinks: {
                thumbnail:''
            },
            infoLink: ''
        }
    }

    closeModal = () => {
        this.setState({open:false})
    }

    titleWithPlusSigns = () =>{
        let splitTitle = this.props.book.title.split(' ')
        return splitTitle.join('+')
    }

    searchBook = () => {
        this.setState({open:true})
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.titleWithPlusSigns()}`)
        .then(resp =>resp.json())
        .then(data => {
            console.log(data.items[0].volumeInfo)
            this.setState({bookData: data.items[0].volumeInfo})
        })
    }

    render() {
        return (
            <div style ={{padding: '1vh', textAlign: 'center' }}>
                <h5 style = {{color: 'blue', cursor: 'pointer'}} onClick ={this.searchBook} >{this.props.book.title} by {this.props.book.author}</h5>
                <BookModal closeModal ={this.closeModal} open={this.state.open} bookData = {this.state.bookData} title = {this.props.book.title} author = {this.props.book.author}/>
            </div>
        )
    }
}

export default Book

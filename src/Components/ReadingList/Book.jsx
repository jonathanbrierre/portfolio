import React, { Component } from 'react'

class Book extends Component {

    titleWithPlusSigns = () =>{
        let splitTitle = this.props.book.title.split(' ')
        return splitTitle.join('+')
    }

    searchBook = () => {
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.titleWithPlusSigns()}`)
        .then(resp =>resp.json())
        .then(console.log)
    }

    render() {
        return (
            <div>
                <span onClick ={this.searchBook} >{this.props.book.title} by {this.props.book.author}</span>
                {/* {this.titleWithPlusSigns()} */}
            </div>
        )
    }
}

export default Book

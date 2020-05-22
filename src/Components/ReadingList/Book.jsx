import React, { Component } from 'react'

class Book extends Component {
    render() {
        return (
            <div>
                {this.props.book.title} by {this.props.book.author}
            </div>
        )
    }
}

export default Book

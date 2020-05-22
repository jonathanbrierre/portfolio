import React, { Component } from 'react'
import bookList from './Books'
import Book from './Book'
import NavBar from '../NavBar'

class ReadingList extends Component {


    
    render() {
        return (
            <div>
                <NavBar/>
                <div className = 'contentContainer'>
                Under Construction
                {bookList.map(book => <Book book = {book}/>)}

                </div>
            </div>
        )
    }
}

export default ReadingList

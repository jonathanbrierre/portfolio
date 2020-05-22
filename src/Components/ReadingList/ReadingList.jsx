import React, { Component } from 'react'
import bookList from './Books'
import Book from './Book'
import NavBar from '../NavBar'
import {v4 as uuidv4} from 'uuid'

class ReadingList extends Component {
    

    
    render() {
        return (
            <div>
                <NavBar/>
                <div className = 'contentContainer'>
                <h2>Under Construction</h2> -
                {bookList.map(book => <Book key = {uuidv4()}  book = {book}/>)}
                </div>
            </div>
        )
    }
}

export default ReadingList

import React, { Component } from 'react'
import bookList from './Books'
import Book from './Book'
import {v4 as uuidv4} from 'uuid'

class ReadingList extends Component {
    
    render() {
        return (
            <div>
                <div className = 'contentContainer' style={{textAlign:'center'}}>
                    <div style ={{padding: '3vw'}}>
                        <h5>The following is a list of books I have read over the years that I found to be especially influential in my personal development. Feel free to click/tap on a title to see a description. </h5> 
                        <h5>This part of the application fetches data from the Google Books API. Each book may take a second or two to load.</h5>
                    </div>
                    <hr></hr>
                    {bookList.map(book => <Book key = {uuidv4()}  book = {book}/>)}
                </div>
            </div>
        )
    }
}

export default ReadingList

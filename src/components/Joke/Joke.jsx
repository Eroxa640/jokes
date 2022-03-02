import React, { Component } from 'react'
import './Joke.css'

export default class Joke extends Component {
    render() {
        let {joke} = this.props; 
        return (
            <li className='item'>{joke}</li>
        )
    }
}

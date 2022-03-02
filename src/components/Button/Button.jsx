import React, { Component } from 'react'
import './Button.css'

export default class Button extends Component {
    render() {
        return (
            <>
                <button className='btn'>Добавить шутку</button>
                <h3>Ну-ка Шуткани!</h3>
            </>
        )
    }
}

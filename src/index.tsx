import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/index.css'
import Game from './components/Game'
import Clock from './components/Clock'

ReactDOM.render(
    <>
        <Game />
        <Clock />
    </>,
    document.getElementById('root')
);

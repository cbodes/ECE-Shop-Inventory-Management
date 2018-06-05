import "./mystyles.scss"
import React from 'react';
import App from './Components/App';
import { render } from 'react-dom'
import controller from './controller'
import { Container } from '@cerebral/react'
import "../node_modules/bulma/css/bulma.css"
import './App.css'


render(
    <Container controller={controller}>
        <App />
    </Container>,
    document.querySelector('#root')
)

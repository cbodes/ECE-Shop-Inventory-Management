import React from 'react';
import './index.css';
import App from './App';
import { render } from 'react-dom'
import controller from './controller'
import { Container } from '@cerebral/react'
import './App.css'


render(
    <Container controller={controller}>
        <App />
    </Container>,
    document.querySelector('#root')
)

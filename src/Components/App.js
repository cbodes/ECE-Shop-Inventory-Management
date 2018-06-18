import React, { Component } from 'react';
import { connect } from '@cerebral/react'
import '../App.css';
import { state, signal } from "cerebral/tags";
import TablePage from './TablePage'
import FrontPage from './FrontPage'
import EntryPage from './EntryPage'
import LoginForm from './LoginForm'
import controller from '../controller'


export default connect(
    {
        currentPage: state`currentPage`,
        showLogin: state`loginStatus.showLoginForm`
    },
    function App({showLogin, currentPage}) {
        if (currentPage === "Front") {
            return (
                <div>
                    {showLogin &&
                        <LoginForm/>
                    }
                    <FrontPage/>
                </div>
        )
        } else if (currentPage === "Entry") {
            return (
                <div>
                    {showLogin &&
                        <LoginForm/>
                    }
                    <EntryPage/>
                </div>
            )
        } else {
            return (
                <div>
                    {showLogin &&
                        <LoginForm/>
                    }
                    <TablePage/>
                </div>
            )
        }
    }
)
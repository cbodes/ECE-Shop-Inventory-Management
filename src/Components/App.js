import React, { Component } from 'react';
import { connect } from '@cerebral/react'
import '../App.css';
import { state, signal } from "cerebral/tags";
import TablePage from './TablePage'
import FrontPage from './FrontPage'
import EntryPage from './EntryPage'


export default connect(
    {
        currentComponent: state`componentSelection`,
        clearMenuSelection: signal`clearMenuSelection`,
        currentPage: state`currentPage`
    },
    function App({currentPage}) {
        if (currentPage === "Front") {
            return <FrontPage/>;
        } else if (currentPage === "Entry") {
            return <EntryPage/>
        } else {
            return <TablePage/>;
        }
    }
)
import React, { Component } from 'react';
import { connect } from '@cerebral/react'
import '../App.css';
import { state, signal } from "cerebral/tags";
import { Compute } from 'cerebral'
import SearchArea from './SearchArea'
import NavBar from './entryNavBar';
import "../../node_modules/bulma/css/bulma.css"
import FilterMenu from './FilterMenu';
import ComponentTable from './ComponentTable';
import LoginForm from './LoginForm';

export default connect(
    {
        loginStatus: state`loginStatus`
    },
    function App({}) {
        return (
            <div id="TablePageWrapper">
                <NavBar/>
                <div className="container" id="horizontal-table-container">
                <div className="columns is-desktop" id="page-body">
                    <div className="column" id="table-page-column">
                        <FilterMenu/>
                    </div>
                    <div className="column has-scroller">
                        <ComponentTable hasDelete={false}/>
                    </div>
                </div>
                </div>
            </div>

        )
    }
)


/*<div className="column is-paddingless is-1" id="table-page-column">
<a className="button">{x}</a>
<article className="message is-dark">
    <div className="message-header">
        <div className="container has-text-left">
            <p className="title is-6 has-text-white">{x}</p>
        </div>
    </div>
    <div className="message-body is-small">{

        (menuItems[x]["type"] === "Text") ?
            <TextFilter
                showName={false}
                myName={x}
                unit={menuItems[x]["unit"]}/> :

            (menuItems[x]["type"] === "Radio") ?
                <RadioFilter
                    showName={false}
                    entryName={x}
                    isActive={true}
                /> :
                (menuItems[x]["type"] === "Dropdown") ?
                    <RadioFilter
                        showName={false}
                        entryName={x}
                        isActive={!("isActive" in menuItems[x]) ||
                        ('isActive' in menuItems[x] &&
                            menuItems[
                                menuItems[x]['isActive'][0]]['value']
                            === menuItems[x]['isActive'][1])
                        }
                    /> : null
    }
    </div>
</article>
</div>*/
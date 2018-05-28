import React, { Component } from 'react';
import { connect } from '@cerebral/react'
import './App.css';
import computedCounts from './counts'
import { state, signal } from "cerebral/tags";
import MenuItem from './MenuItem';
import fontawesome from '@fortawesome/fontawesome';
import {clearMenuSelection} from "./sequences";


export default connect(
    {
        currentComponent: state`componentSelection`,
        clearMenuSelection: signal`clearMenuSelection`
    },
    function App({ props, counts, currentComponent, clearMenuSelection }) {
        return (
            <div class="container is-fluid">
                <div class="columns" id = "root-wrapper">
                    <div class="column is-one-fifth has-text-centered">

                        <aside id="menu-wrapper" class="menu ">
                            <div class="box has-background-white-ter">
                                <MenuItem/>
                            </div>
                            <div className="container has-text-left">
                                <a className="button is-danger is-outlined"
                                onClick={() =>
                                    clearMenuSelection()
                                }>
                                    Clear filters
                                </a>
                            </div>
                        </aside>
                    </div>

                    <div class="column">
                        <div class="notification is-primary">
                            <p class="title">{currentComponent}</p>
                        </div>
                        <div className="notification">
                            <p className="content">{currentComponent.toString()}</p>
                        </div>
                        <div class="notification has-text-centered">
                            <p class="content">Select a filter or search to get started</p>
                        </div>
                    </div>
                    <div class="column is-one-fifth"></div>
                </div>
            </div>
        )
    }
)
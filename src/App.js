import React, { Component } from 'react';
import { connect } from '@cerebral/react'
import './App.css';
import computedCounts from './counts'
import { state, signal } from "cerebral/tags";
import MenuItem from './MenuItem';
import fontawesome from '@fortawesome/fontawesome';


export default connect(
    {
        currentComponent: state`componentSelection`,
    },
    function App({ props, counts, currentComponent}) {
        return (
            <div class="container is-fluid">
                <div class="columns" id = "root-wrapper">
                    <div class="column is-one-quarter has-text-centered">
                        <aside id="menu-wrapper" class="menu">
                            <div class="box is-primary">
                                <MenuItem/>
                                <div class="container has-text-left">
                                </div>
                            </div>
                        </aside>
                        <div className="has-text-left ">
                            <a className="button ">clear filters
                            </a>
                        </div>
                    </div>

                    <div class="column">
                        <div class="notification is-primary">
                            <p class="title">{currentComponent}</p>
                        </div>
                        <div className="notification">
                            <p className="content">{currentComponent.toString()}</p>
                        </div>
                        <div class="notification has-text-centered">
                            <p class="content">Select a filter to get started</p>
                        </div>
                    </div>
                    <div class="column is-one-fifth"></div>
                </div>
            </div>
        )
    }
)
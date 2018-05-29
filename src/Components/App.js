import React, { Component } from 'react';
import { connect } from '@cerebral/react'
import '../App.css';
import { state, signal } from "cerebral/tags";
import MenuItem from './MenuItem';
import SearchArea from './SearchArea'
import "bulma"
import fontawesome from '@fortawesome/fontawesome';
import {clearMenuSelection} from "../app/sequences";


export default connect(
    {
        currentComponent: state`componentSelection`,
        clearMenuSelection: signal`clearMenuSelection`
    },
    function App({ props, counts, currentComponent, clearMenuSelection }) {
        return (
            <div class="container is-fluid">

                <div className="notification has-text-centered" id="page-heading">
                    <p className="subtitle is-1" id="heading-title">Purdue ECE Shop Part Catalog</p>
                </div>
                <div class="columns is-multiline" id = "root-wrapper">
                    <div class="column is-one-fifth has-text-left">

                                <MenuItem/>
                            <div className="container has-text-left">
                                <a className="button is-danger is-outlined"
                                onClick={() =>
                                    clearMenuSelection()
                                }>
                                    Clear filters
                                </a>
                            </div>
                    </div>

                    <div class="column is-three-fifths">
                        <div className="box">
                            <SearchArea/>
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

const mainStyle = {
    backgroundColor: 'grey',
}
import React, { Component } from 'react';
import { connect } from '@cerebral/react'
import '../App.css';
import { state, signal } from "cerebral/tags";
import RadioEntry from './RadioEntry'
import TextEntry from './TextEntry'


export default connect(
    {
        currentComponent: state`componentSelection`,
        menuItems: state`menuItems`,
        changeSelection: signal`menuSelectionChanged`,
    },
    function App({currentComponent, menuItems, changeSelection }) {
        return (
            <nav className="navbar is-dark">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <p className="title is-4 has-text-white">
                            ECE Shop
                        </p>
                    </div>
                    <div className="navbar-burger burger">
                        <span/>
                        <span/>
                        <span/>
                    </div>
                </div>
                <div className="navbar-start">
                    <div className="navbar-menu" id="navBarMenu">
                        <div className="navbar-start">
                            <div className="navbar-item has-dropdown is-hoverable has-text-white">
                                <a className="navbar-link">Choose a component</a>
                                <div className="navbar-dropdown is-boxed">
                                    {Object.keys(menuItems).map(x =>
                                        <a className= {currentComponent[0] === x ? "navbar-item is-active" : "navbar-item"}
                                           onClick={() => {
                                               changeSelection({menuSelection: [x]})
                                           }}>
                                            <a className={currentComponent[0] === x ? "is-active" : ""}>
                                        <span className="icon">
                                            <img className="icon"
                                                 src={require("../images/" + menuItems[x].iconName)}>
                                            </img>
                                        </span>
                                                <span className=
                                                          {currentComponent[0] === x ?
                                                              "subtitle is-6 has-text-white" :
                                                              "subtitle is-6"}>
                                            {x}</span>
                                            </a>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
)
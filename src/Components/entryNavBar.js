import React, { Component } from 'react';
import { connect } from '@cerebral/react'
import '../App.css';
import { state, signal } from "cerebral/tags";
import RadioEntry from './RadioEntry'
import TextEntry from './TextEntry'


export default connect(
    {
        currentComponent: state`componentSelection`,
        menuIsActive: state`menuIsActive`,
        menuItems: state`menuItems`,
        changeSelection: signal`menuSelectionChanged`,
        activateMenu: signal`menuButtonPressed`,
        homeButtonClicked: signal`pageChangeClicked`
    },
    function App({currentComponent, menuItems, changeSelection, activateMenu, menuIsActive, homeButtonClicked }) {
        return (
            <nav className="navbar is-dark">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <a className="title is-4 has-text-white"
                            onClick={() =>
                                homeButtonClicked({
                                    newPage: "Front"
                                })
                            }>
                            ECE Shop
                        </a>
                    </div>
                    <div className={menuIsActive ? "navbar-burger burger is-active": "navbar-burger burger"}
                        onClick={() => activateMenu()}>
                        <span/>
                        <span/>
                        <span/>
                    </div>
                </div>
                <div className="navbar-start">
                    <div className={menuIsActive ? "navbar-menu is-active" : "navbar-menu"} id="navBarMenu">
                        <div className="navbar-start">
                            <div className="navbar-item has-dropdown is-hoverable has-text-white">
                                <a className="navbar-link">{currentComponent[0] === undefined ? "choose a component" :
                                menuItems[currentComponent[0]].itemName}</a>
                                <div className="navbar-dropdown is-boxed">
                                    {Object.keys(menuItems).map(x =>
                                        <a className= {currentComponent[0] === x ? "navbar-item is-active" : "navbar-item"}
                                           onClick={() => {
                                               activateMenu()
                                               changeSelection({menuSelection: [x]})
                                           }}>
                                            <p className={currentComponent[0] === x ? "is-active" : ""}>
                                                {/*<span className={currentComponent[0] === x ? "icon invert-filter" : "icon"}>
                                            <img className="icon"
                                                 src={require("../images/" + menuItems[x].iconName)}>
                                            </img>
                                        </span>*/}
                                                <span className=
                                                          {currentComponent[0] === x ?
                                                              "subtitle is-6 has-text-white" :
                                                              "subtitle is-6"}>
                                            {menuItems[x].itemName}</span>
                                            </p>
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
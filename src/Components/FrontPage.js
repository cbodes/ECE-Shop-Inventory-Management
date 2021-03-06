import React, { Component } from 'react';
import { connect } from '@cerebral/react'
import { state, signal } from "cerebral/tags";
import SearchArea from './SearchArea'
import fontawesome from '@fortawesome/fontawesome';
import {clearMenuSelection} from "../app/sequences";

import "../../node_modules/bulma/css/bulma.css"

export default connect(
    {
        menuItems: state`menuItems`,
        changePage: signal`pageChangeClicked`,
        changeSelection: signal`menuSelectionChanged`
    },
    function App({menuItems, changePage, changeSelection}) {
        var newMenu = Object.keys(menuItems);
        return (
                <main>
                    <section className="hero is-dark is-small">
                        <div className="hero-head has-text-centered">
                            <p className="title  is-1">ECE Shop</p>
                        </div>

                        <div className="hero-body">
                            <div className="container has-text-centered">
                                    <div className="control has-icons-right">
                                        <input className="input" type="text" placeholder="Search for any part"/>
                                        <span className="icon is-small is-right">
                                            <i className="fas fa-search"></i>
                                        </span>
                                    </div>
                            </div>
                        </div>
                        <div className="hero-foot has-text-centered">
                            <p className="title is-5">
                                or select a category...
                            </p>
                        </div>
                    </section>
                    <div className="columns is-centered is-multiline is-mobile is-marginless" >
                    {newMenu.map((x) =>
                        <div className="column is-3 front-page-column">
                            <a>
                            <article className="message is-dark is-shady is-bold"
                                onClick={() => {
                                    changeSelection({menuSelection: [x]})
                                    changePage({newPage: "Table"})
                                }}>
                                <div className="message-header">
                                    <div className="container has-text-centered">
                                    <p className="title is-6 has-text-white">{menuItems[x].itemName}</p>
                                    </div>
                                </div>
                                <div className="message-body is-small">

                                    <figure className="image">
                                        <img src={require('../images/' + menuItems[x].iconName)}/>
                                    </figure>
                                </div>
                            </article>
                            </a>
                        </div>
                    )}
                    </div>
                </main>

        )
    },
)


function makeForCols(menu) {
    const rowLength = 12;
    const menuKeys = Object.keys(menu);
    var newMenu = [];
    for (var i = 0; i < menuKeys.length; i++) {
        if (i % rowLength === 0) {
            newMenu.push([menuKeys[i]]);
        } else {
            newMenu[Math.floor(i / rowLength)].push(menuKeys[i]);
        }
    }
    return newMenu;
}


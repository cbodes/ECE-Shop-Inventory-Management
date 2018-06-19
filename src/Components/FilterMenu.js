import React, { Component } from 'react';
import { connect } from '@cerebral/react'
import '../App.css';
import { state, signal } from "cerebral/tags";
import { Compute } from 'cerebral'
import SearchArea from './SearchArea'
import NavBar from './entryNavBar';
import "../../node_modules/bulma/css/bulma.css"
import itemIsActive from '../computed/itemIsActive'
import RadioFilter from './RadioFilter'
import TextFilter from './TextFilter';
import ComponentTable from './ComponentTable';


export default connect(
    {
        toggleFilter: signal`toggleFilter`,
        menuItems: state`menuItems.${state`componentSelection.0`}.filterOptions`,
        filterError: state`requestError`,
        currentSelection: state`menuItems.${state`componentSelection.0`}.itemName`,
    },
    function App({ menuItems, toggleFilter, currentSelection}) {
        return (
            <nav className="panel ">
                <div className="panel-heading ia-filter-menu-header">
                    <p className="control has-icons-left">
                        <input className="input is-small is-dark" type="text" placeholder={"Search " + currentSelection}/>
                        <span className="icon is-small is-left">
                            <i className="fas fa-search"/>
                        </span>
                    </p>
                </div>
                {Object.keys(menuItems).map(x =>
                            <nav className="message is-dark ia-filter-menu is-small">
                                <div className="message-header has-hovershade is-clickable ia-filter-menu-header"
                                     onClick={() =>
                                         toggleFilter({
                                             filterName: x
                                         })
                                     }>
                                    <div className="container has-text-left">
                                        <p className="title is-6 has-text-white is-bold">{menuItems[x].itemName + ": "}
                                            {menuItems[x].filterIsSet ?
                                                menuItems[x].isRange ? (menuItems[x].min + menuItems[x].unit +
                                                    " to " + menuItems[x].max + menuItems[x].unit):
                                                    (menuItems[x].value + menuItems[x].unit) :
                                                "Any"}</p>
                                    </div>
                                    <a className={menuItems[x].showBody ? "delete" : "delete is-plus"}
                                    />
                                </div>
                                {menuItems[x].showBody &&
                                <div className="message-body is-small ia-filter-menu-body ">{
                                    (menuItems[x]["type"] === "Text") ?
                                        <TextFilter
                                            showName={false}
                                            entryName={x}
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
                                }
                            </nav>
                    )}
                            </nav>

        )
    }
)

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
        filterError: state`requestError`
    },
    function App({ menuItems, toggleFilter, filterError}) {
        return (
            <div className="columns is-multiline is-mobile is-marginless" >
                {Object.keys(menuItems).map(x =>
                    <div className="" id="table-page-column">
                        <article className="message is-dark">
                            <div className="message-header has-hovershade is-clickable"
                                 onClick={() =>
                                     toggleFilter({
                                         filterName: x
                                     })
                                 }>
                                <div className="container has-text-left">
                                    <p className="title is-6 has-text-white">{menuItems[x].itemName + ": "}
                                        {menuItems[x].filterIsSet ?
                                            menuItems[x].isRange ? (menuItems[x].min + menuItems[x].unit +
                                                " to " + menuItems[x].max + menuItems[x].unit):
                                                (menuItems[x].value + menuItems[x].unit) :
                                            "Any"}</p>
                                </div>
                                <button className={menuItems[x].showBody ? "delete" : "delete is-plus"}
                                />
                            </div>
                            {menuItems[x].showBody &&
                            <div className="message-body is-small">{
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
                        </article>
                    </div>
                )}
            </div>

        )
    }
)

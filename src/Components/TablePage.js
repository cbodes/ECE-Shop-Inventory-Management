import React, { Component } from 'react';
import { connect } from '@cerebral/react'
import '../App.css';
import { state, signal } from "cerebral/tags";
import SearchArea from './SearchArea'
import NavBar from './entryNavBar';
import "../../node_modules/bulma/css/bulma.css"

import RadioFilter from './RadioFilter'
import TextFilter from './TextFilter';
import ComponentTable from './ComponentTable';

export default connect(
    {
        toggleFilter: signal`toggleFilter`,
        menuItems: state`menuItems.${state`componentSelection.0`}.filterOptions`
    },
    function App({ menuItems, toggleFilter}) {
        return (
            <main>
                <NavBar/>
                    <div className="columns is-centered is-multiline is-mobile is-marginless" >
                        {Object.keys(menuItems).map(x =>
                        <div className="column" id="table-page-column">
                            <article className="message is-dark">
                                <div className="message-header"
                                     onClick={() =>
                                         toggleFilter({
                                             filterName: x
                                        })
                                }>
                                    <div className="container has-text-left">
                                        <p className="title is-6 has-text-white">{menuItems[x].itemName}</p>
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
                <div className="section">
                    <div className="columns is-centered">
                        <div className="column is-narrow has-text-centered">
                            <ComponentTable/>
                        </div>
                    </div>
                </div>
            </main>

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
import React, { Component } from 'react';
import { connect } from '@cerebral/react'
import '../App.css';
import { state, signal } from "cerebral/tags";
import RadioEntry from './RadioEntry'
import TextEntry from './TextEntry';
import EntryNavBar from './entryNavBar';

import EntryTable from './EntryTable';

export default connect(
    {
        submitEntry: signal`submitEntry`,
        entryObject: state`menuItems.${state`componentSelection.0`}`,
    },
    function App({entryObject, submitEntry}) {
        return (

            <main>
                <EntryNavBar/>
                <div className="levels" id = "root-wrapper">
                    <div className="level-item">
                        <div className="notification has-backshadow" id="entryFormWrapper">
                            <p className="title is-3 has-text-centered">
                                {entryObject.itemName}
                            </p>
                            {Object.keys(entryObject["entryOptions"]).map(rows =>
                                (entryObject["entryOptions"][rows]["type"] === "Text") ?
                                    <TextEntry
                                        showName={true}
                                        entryName={rows}
                                        unit={entryObject["entryOptions"][rows]["unit"]}/> :

                                (entryObject["entryOptions"][rows]["type"] === "Radio") ?
                                    <RadioEntry
                                        showName={true}
                                        entryName={rows}
                                        isActive={true}
                                        /> :
                                (entryObject["entryOptions"][rows]["type"] === "Dropdown") ?
                                    <RadioEntry
                                        showName={true}
                                        entryName={rows}
                                        isActive={!("isActive" in entryObject["entryOptions"][rows]) ||
                                        ('isActive' in entryObject["entryOptions"][rows] &&
                                            entryObject["entryOptions"][
                                            entryObject["entryOptions"][rows]['isActive'][0]]['value']
                                            === entryObject["entryOptions"][rows]['isActive'][1])
                                            }
                                    /> : null
                            )}
                            <div className="buttons is-centered">
                                <a className="button is-danger">Clear</a>
                                <a className="button is-success"
                                   onClick={(e) => {
                                       e.preventDefault()
                                       submitEntry()
                                   }
                                   }
                                >Submit</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="columns is-centered">
                        <div className="column is-narrow has-text-centered">
                            <EntryTable/>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
)


function makeForCols(menu) {
    const rowLength = 3;
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


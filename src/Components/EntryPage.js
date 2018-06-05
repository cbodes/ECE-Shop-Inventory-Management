import React, { Component } from 'react';
import { connect } from '@cerebral/react'
import '../App.css';
import { state, signal } from "cerebral/tags";
import RadioEntry from './RadioEntry'
import TextEntry from './TextEntry';
import EntryNavBar from './entryNavBar';

export default connect(
    {
        submitEntry: signal`submitEntry`,
        currentComponent: state`componentSelection`,
        menuItems: state`menuItems`,
    },
    function App({currentComponent, menuItems, submitEntry}) {
        let entryList = [];
        if (currentComponent[0] != undefined) {
            //entryList = makeForCols(menuItems[currentComponent[0]]["entryOptions"]);
            entryList = Object.keys(menuItems[currentComponent[0]]["entryOptions"]);
        }
        return (

            <main>
                <EntryNavBar/>
                <div className="levels" id = "root-wrapper">
                    <div className="level-item">
                        <div className="notification has-backshadow" id="entryFormWrapper">
                            <p className="title is-3 has-text-centered">
                                {currentComponent[0]}
                            </p>
                            {entryList.map(rows =>
                                (menuItems[currentComponent[0]]["entryOptions"][rows]["type"] === "Text") ?
                                    <TextEntry
                                        myName={rows}
                                        unit={menuItems[currentComponent[0]]["entryOptions"][rows]["unit"]}/> :

                                (menuItems[currentComponent[0]]["entryOptions"][rows]["type"] === "Radio") ?
                                    <RadioEntry
                                        entryName={rows}
                                        isActive={true}
                                        /> :
                                (menuItems[currentComponent[0]]["entryOptions"][rows]["type"] === "Dropdown") ?
                                    <RadioEntry
                                        entryName={rows}
                                        isActive={!("isActive" in menuItems[currentComponent[0]]["entryOptions"][rows]) ||
                                        ('isActive' in menuItems[currentComponent[0]]["entryOptions"][rows] &&
                                            menuItems[currentComponent[0]]["entryOptions"][
                                            menuItems[currentComponent[0]]["entryOptions"][rows]['isActive'][0]]['value']
                                            === menuItems[currentComponent[0]]["entryOptions"][rows]['isActive'][1])
                                            }
                                    /> : null

                            )}

                            <div className="buttons is-centered">
                                <a className="button is-danger">Clear</a>
                                <a className="button is-success"
                                   onClick={(e) => submitEntry({
                                       componentName: currentComponent[0]
                                   })
                                       e.preventDefault()
                                   }
                                >Submit</a>
                            </div>
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




import React  from 'react';
import { connect } from '@cerebral/react'
import '../App.css';
import {props, state, signal } from "cerebral/tags";


export default connect(
    {
        currentComponent: state`componentSelection`,
        changeEntryValue: signal`changeEntryValue`,
        menuItems: state`menuItems`,
        name: props`entryName`,
        active: props`isActive`
    },
    function App({ menuItems, name, currentComponent, changeEntryValue, active}) {
        const myObject = menuItems[currentComponent[0]]["entryOptions"][name];

        return (

            <div className="field">
                <div className="field-label is-normal">
                    <label className="label">
                        <p class="subtitle is-6 has-text-left">
                            {name}
                        </p>
                    </label>
                </div>
                <div className="level">
                    <div className="level-item level-left">
                        <div className="field has-addons">
                            {myObject["options"].map(x =>
                            <p className="control">
                                <a className={myObject["value"] === x && active ?
                                    "button is-dark" : "button is-dark is-outlined"}
                                    onClick={() => changeEntryValue({
                                        newValue: x,
                                        entryName: name,
                                        componentName: currentComponent[0]
                                    })}>
                                    {x}
                                </a>
                            </p>
                            )}
                        </div>
                    </div>
                </div>

            </div>

        )
    }
)

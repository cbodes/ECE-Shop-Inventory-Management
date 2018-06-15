

import React  from 'react';
import { connect } from '@cerebral/react'
import '../App.css';
import {props, state, signal } from "cerebral/tags";


export default connect(
    {
        changeEntryValue: signal`changeEntryValue`,
        myObject: state`menuItems.${state`componentSelection.0`}.entryOptions.${props`entryName`}`,
        name: props`entryName`,
        active: props`isActive`,
        showName: props`showName`
    },
    function App({ myObject, name, currentComponent, changeEntryValue, active, showName}) {

        return (

            <div className="field">
                <div className="field-label is-normal">
                    <label className="label">
                        <p className="subtitle is-6 has-text-left">
                            {showName && myObject.itemName}
                        </p>
                    </label>
                </div>
                <div className="level">
                    <div className="level-item">
                        <div className="field has-addons">
                            {myObject["options"] != undefined && myObject["options"].map(x =>
                            <p className="control">
                                <a className={!active ? "button is-dark is-static" :
                                    myObject["value"].toLowerCase() === x.toLowerCase() && active ?
                                    "button is-dark" : "button is-dark is-outlined"}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        changeEntryValue({
                                            newValue: x,
                                            entryName: name
                                        })
                                    }}>
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

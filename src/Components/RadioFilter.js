

import React  from 'react';
import { connect } from '@cerebral/react'
import '../App.css';
import {props, state, signal } from "cerebral/tags";


export default connect(
    {
        changeFilterValue: signal`changeFilterValue`,
        myObject: state`menuItems.${state`componentSelection.0`}.filterOptions.${props`entryName`}`,
        name: props`entryName`,
        active: props`isActive`,
        showName: props`showName`
    },
    function App({ myObject, name, changeFilterValue, active, showName}) {
        return (
            <div className="field">
                <div className="field-label is-normal">
                    <label className="label">
                        <p class="subtitle is-6 has-text-left">
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
                                        myObject["value"] &&
                                        myObject["value"].toLowerCase() === x.toLowerCase() && active ?
                                            "button is-dark" : "button is-dark is-outlined"}
                                       onClick={(e) => {
                                           e.preventDefault()
                                           changeFilterValue({
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

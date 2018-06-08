

import React, { Component } from 'react';
import { connect } from '@cerebral/react'
import '../App.css';
import {props, state, signal } from "cerebral/tags";


export default connect(
    {
        changeFilterValue: signal`changeFilterValue`,
        myObject: state`menuItems.${state`componentSelection.0`}.filterOptions.${props`entryName`}`,
        name: props`entryName`,
        unit: props`unit`,
        showName: props`showName`
    },
    function App({ myObject, name, unit, changeFilterValue, showName}) {

        return (
            <div className="field">
                <div className="field-label is-normal">
                    <label className="label">
                        <p className="subtitle is-6 has-text-left">
                            {showName && myObject.itemName}
                        </p>
                    </label>
                </div>
                <div className="field-body has-addons">
                    <div className="field">
                        {myObject["canRange"] &&
                        <div className="field has-addons">
                            <p className="control has-addons">
                                <a className={myObject["isRange"] ? "button is-dark" :"button is-dark is-outlined"}>
                                    Specific
                                </a>
                                <a className={!myObject["isRange"] ? "button is-dark" :"button is-dark is-outlined"}>
                                    Ranged
                                </a>
                            </p>
                        </div>}
                        <div className="control has-icons-right">
                            <input className="input" placeholder="No Value"
                                   onChange={(e) => changeFilterValue({
                                       newValue: e.target.value,
                                       entryName: name
                                   })}/>
                            <span className="icon is-small is-right">
                                {unit}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
)

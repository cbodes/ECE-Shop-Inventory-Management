

import React, { Component } from 'react';
import { connect } from '@cerebral/react'
import '../App.css';
import {props, state, signal } from "cerebral/tags";


export default connect(
    {
        changeEntryValue: signal`changeEntryValue`,
        myObject: state`menuItems.${state`componentSelection.0`}.entryOptions.${props`entryName`}`,
        name: props`entryName`,
        unit: props`unit`,
        showName: props`showName`,
        myError: state`requestError.${props`entryName`}.value`
    },
    function App({ myObject, name, unit, changeEntryValue, showName, myError}) {
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
                        <div className="control has-icons-right">
                            <input className="input" placeholder="No Value"
                               value={myObject.value}
                               onChange={(e) => changeEntryValue({
                                   newValue: e.target.value,
                                   entryName: name
                               })}/>
                            <span className="icon is-small is-right">
                                {unit}
                            </span>
                        </div>
                        {myError &&
                            <p className="help is-danger">{myError.message}</p>
                        }
                    </div>
                </div>
            </div>
        )
    }
)

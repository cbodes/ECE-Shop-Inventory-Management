

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
        showName: props`showName`,
        myError: state`filterError.${props`entryName`}`
    },
    function App({ myObject, name, unit, changeFilterValue, showName, myError}) {

        return (
            <section>
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
                                <input className="input is-small is-dark" placeholder="Enter a value"
                                       value={myObject.value}
                                       onChange={(e) => changeFilterValue({
                                           newValue: e.target.value,
                                           entryName: name
                                       })}/>
                                {myError &&
                                <p className="help is-danger">{myError.message}</p>
                                }
                                <span className="icon is-small is-right">
                                    {unit}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                {myObject.canRange &&
                <div className="field">
                    <div className="field-body has-addons">
                        <div className="field">
                            <div className="control has-icons-right">
                                <input className="input is-small is-dark" placeholder="Min"
                                       value={myObject.min}
                                       onChange={(e) => changeFilterValue({
                                           newValue: e.target.value,
                                           entryName: name,
                                           field: "min"
                                       })}/>
                                <span className="icon is-small is-right">
                                {unit}
                            </span>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control has-icons-right">
                                <input className="input is-small is-dark" placeholder="Max"
                                       value={myObject.max}
                                       onChange={(e) => changeFilterValue({
                                           newValue: e.target.value,
                                           entryName: name,
                                           field: "max"
                                       })}/>
                                <span className="icon is-small is-right">
                                {unit}
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
                }
            </section>
        )
    }
)

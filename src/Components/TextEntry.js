

import React, { Component } from 'react';
import { connect } from '@cerebral/react'
import '../App.css';
import {props, state, signal } from "cerebral/tags";


export default connect(
    {
        currentComponent: state`componentSelection`,
        changeEntryValue: signal`changeEntryValue`,
        menuItems: state`menuItems`,
        name: props`myName`,
        unit: props`unit`
    },
    function App({ menuItems, name, unit, changeEntryValue, currentComponent}) {
        return (
            <div className="field">
                <div className="field-label is-normal">
                    <label className="label">
                        <p className="subtitle is-6 has-text-left">
                            {name}
                        </p>
                    </label>
                </div>
                <div className="field-body has-addons">
                    <div className="field">
                        <div className="control has-icons-right">
                            <input className="input" placeholder="No Value"
                               onChange={(e) => changeEntryValue({
                                   newValue: e.target.value,
                                   entryName: name,
                                   componentName: currentComponent[0]
                               })}/>
                            <span className="icon is-small is-right">
                                {unit}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            /*<article className="message is-dark is-shady is-bold">
                <div className="message-header">
                    <div className="container has-text-centered">
                        <p className="title is-5 has-text-white">{name}</p>
                    </div>
                </div>
                <div className="message-body is-small">
                    <div className="field has-addons">
                        <p className="control">
                            <input className="input" type="text" placeholder="No Value"/>
                        </p>
                        <p className="control">
                            <a className="button">
                                {unit}
                            </a>
                        </p>
                    </div>
                </div>
            </article>*/
        )
    }
)



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
    },
    function App({ name, currentComponent, changeEntryValue}) {
        return (
            <div className="field">
                <div className="control">
                    <div className="select is-small">
                        <select>
                            <option></option>
                        </select>
                    </div>
                </div>
            </div>

        )
    }
)

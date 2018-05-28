import React from 'react'
import { connect } from '@cerebral/react'
import { state, signal } from 'cerebral/tags'

export default connect(
    {
        selection: signal`componentSelectionChanged`,
        currentSelection: state`currentComponentSelection`
    },
    function NewComponentID({currentSelection, selection}) {
        return (
            <form>
                <div className="radio">
                    <label>
                        <input type="radio" value="option1" checked = {currentSelection=='Resistor' ? true : false}
                        onChange={() => {
                            selection({ componentName: 'Resistor'})
                        }}
                        />
                        Resistor
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="option1" checked = {currentSelection=='Capacitor' ? true : false}
                               onChange={() => {
                                   selection({ componentName: 'Capacitor'})
                               }}
                        />
                        Capacitor
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="option1" checked = {currentSelection=='Inductor' ? true : false}
                               onChange={() => {
                                   selection({ componentName: 'Inductor'})
                               }}
                        />
                        Inductor
                    </label>
                </div>
                <div className="radio">
                    <label>
                        <input type="radio" value="option1" checked = {currentSelection=='Integrated Circuit' ? true : false}
                               onChange={() => {
                                   selection({ componentName: 'Integrated Circuit'})
                               }}
                        />
                        Integrated Circuit
                    </label>
                </div>
            </form>
        )
    }
)
import React from 'react'
import { connect } from '@cerebral/react'
import { state, signal } from 'cerebral/tags'


export default connect (
    {
        changeSelection: signal`menuSelectionChanged`,
        currentSelection: state`componentSelection`,
        menuItems: state`menuItems`
    },
    function NewComponentID({currentSelection, changeSelection, menuItems}){
        return (
            <ul class="menu-list">
                {menuItems.map(menuArray => (currentSelection[0] === undefined || currentSelection[0] == menuArray[0]) &&
                <li onClick={() => {
                    changeSelection({
                        menuSelection: [menuArray[0]]
                    })
                }}>
                <a class = {currentSelection[0]===menuArray[0] ? "is-active" : ""
                }>{menuArray[0]}</a>
                    {currentSelection[0]===menuArray[0] && Array.isArray(menuArray) && menuArray[1] &&
                    <ul>
                        {menuArray[1].map(x =>
                        <li onClick={() => {
                            changeSelection ({
                                menuSelection: (Array.isArray(x) ? [menuArray[0], x[0]] : [menuArray[0], x])
                            })
                        }}><a class = {currentSelection[1]===(Array.isArray(x) ? x[0] : x) ? "is-active" : ""}>
                            {Array.isArray(x) ? x[0] : x}</a>
                                {currentSelection[1] == x[0] && Array.isArray(x) && x[1] &&
                                <ul>
                                    {x[1].map(z =>
                                        <li onClick={() => {
                                            changeSelection ({
                                                menuSelection: (Array.isArray(z) ? [menuArray[0], x[0], z[0]] : [menuArray[0], x[0], z])
                                            })
                                        }}><a className={currentSelection[2] === z ? "is-active" : ""}>
                                            {z}
                                        </a></li>
                                    )}
                                </ul>
                            }

                        </li>
                        )}
                    </ul>
                    }
            </li>

                )}
            </ul>

        )
    }
)
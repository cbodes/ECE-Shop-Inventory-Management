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
                {Object.keys(menuItems).map(menuArray =>
                <li onClick={() => {
                    changeSelection({
                        menuSelection: [menuArray]
                    })
                }}>
                    <a class = {currentSelection[0]===menuArray ? "is-active" : ""}>
                        <span className="icon">
                            <img className="icon" src={require("../images/" + menuItems[menuArray].iconName)}>
                            </img>
                        </span>
                        <span> {menuArray}</span>
                    </a>
                </li>
                )}
            </ul>
            /*<nav className="tabs is-centered is-toggle">
                <ul>
                {Object.keys(menuItems).map(menuArray =>
                    <li onClick={() => {
                        changeSelection({
                            menuSelection: [menuArray]
                        })
                    }}>
                        <a className={currentSelection[0] === menuArray ? "is-active" : ""}>
                            <span className="icon">
                                <img className="icon" src={require("../images/" + menuItems[menuArray].iconName)}/>
                            </span>
                            <span> {menuArray} </span>
                        </a>
                    </li>
                )}
                </ul>
            </nav>*/

        )
    }
)
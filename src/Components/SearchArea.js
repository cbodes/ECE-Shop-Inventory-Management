import React from 'react'
import { connect } from '@cerebral/react'
import { state, signal } from 'cerebral/tags'
import Slider, {Range} from 'rc-slider';
import '../../node_modules/rc-slider/assets/index.css';

export default connect (
    {
        changeSelection: signal`menuSelectionChanged`,
        currentSelection: state`componentSelection`,
        menuItems: state`menuItems`
    },
    function SearchArea({currentSelection, changeSelection, menuItems}) {
        return (
            <div className="tile is-ancestor">
            <div className="tile is-vertical">
                <div className="tile">
                    <div className="tile is-parent">
                        <article className="tile is-child box">
                            <p className="title is-4">Value</p>
                            <div className="field has-addons">
                                <div className="control is-expanded">
                                    <input className="input" type="text" placeholder="Find a part"/>
                                </div>
                            </div>
                        </article>
                    </div>

                    <div className="tile is-parent">
                        <article className="tile notification is-child box">
                            <p className="title is-4">Tolerance</p>
                            <Slider step={50} defaultValue={100} marks={{0:"1%", 50:"5%", 100:"10%"}}>

                            </Slider>
                        </article>
                    </div>

                </div>
                <div className="tile">
                    <div className="tile is-parent">
                    </div>
                </div>
            </div>
            <div className="tile is-parent">
                <article className="tile is-child notification is-success">
                    <div className="content">
                        <p className="title">Tall tile</p>
                        <p className="subtitle">With even more content</p>
                        <div className="content">
                        </div>
                    </div>
                </article>
            </div>
        </div>
        )

        /*return (
        <div className="columns is-multiline is-centered">
            <div className="column is-narrow">
                <div className="field has-addons">
                    <div className="control">
                        <span className="button is-primary is-rounded">
                            Value
                        </span>
                    </div>
                    <div className="control is-expanded">
                        <input className="input" type="text" placeholder="Find a part"/>
                    </div>
                </div>

                <div className="field has-addons">
                    <div className="control">
                        <span className="button is-active is-rounded">
                            Tolerance
                        </span>
                    </div>
                    <div className="control is-expanded">
                        <input className="input" type="text" placeholder="Find a part"/>
                    </div>
                </div>

            </div>
            <div className="column is-narrow">
            </div>

            <div className="column is-narrow">
                <div className="field has-addons">
                    <div className="control">
                        <span className="button is-active is-rounded">
                            Power
                        </span>
                    </div>
                    <div className="control is-expanded">
                        <input className="input" type="text" placeholder="Find a part"/>
                    </div>
                </div>


                <div className="field has-addons">
                    <div className="control">
                        <span className="button is-active is-rounded">
                            Package
                        </span>
                    </div>
                    <div className="control is-expanded">
                        <input className="input" type="text" placeholder="Find a part"/>
                    </div>
                </div>

            </div>
            <div className="column is-narrow">
            </div>
        </div>
        )*/
    }
)
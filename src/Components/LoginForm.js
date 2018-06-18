import React, { Component } from 'react';
import { connect } from '@cerebral/react'
import { state, signal } from "cerebral/tags";
import '../App.css';

export default connect(
    {
        loginStatus: state`loginStatus`,
        changeLoginEntry: signal`changeLoginEntry`,
        submitLogin: signal`submitLogin`,
        cancelLogin: signal`cancelLogin`
    },
    function App({loginStatus, changeLoginEntry, submitLogin, cancelLogin}) {
        return (
            <div id="login-form-wrapper">
                <div className="box has-text-centered" id="login-form">
                    <p className="title has-text-grey is-4">
                        Login
                    </p>
                    <div className="form">
                        <div className="field">
                            <div className="control has-icons-left">
                                <input className="input" placeholder="user"
                                       value={loginStatus.user}
                                       onChange={(e) => changeLoginEntry({
                                           newValue: e.target.value,
                                           entryName: "user"
                                       })}
                                />
                                <span className="icon is-left">
                                    <i className="fas fa-user"></i>
                                </span>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control has-icons-left">
                                <input className="input" placeholder="password" type="password"
                                       value={loginStatus.password}
                                       onChange={(e) => changeLoginEntry({
                                           newValue: e.target.value,
                                           entryName: "password"
                                       })}
                                />
                                <span className="icon is-left">
                                    <i className="fas fa-lock"></i>
                                </span>
                            </div>
                        </div>
                        <div className="buttons is-centered">
                            <a className="button"
                                onClick={() =>
                                    cancelLogin()
                                }
                            >Cancel</a>
                            <a className="button"
                               onClick={() =>
                                   submitLogin()
                               }
                            >Submit</a>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
)

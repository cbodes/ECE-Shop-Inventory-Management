import React, { Component } from 'react';
import { connect } from '@cerebral/react'
import '../App.css';
import { state, signal } from "cerebral/tags";
import "../../node_modules/bulma/css/bulma.css";


export default connect(
    {
        tableHeaders: state`menuItems.${state`componentSelection.0`}.entryOptions`,
        tableData: state`getData`
    },
    function App({ tableHeaders, tableData}) {
        return (
            <div className="box is-table">
                <table className="table is-striped">
                    <thead>
                    <tr>
                        {Object.keys(tableHeaders).map(name =>
                            <th className="has-text-centered">{tableHeaders[name].itemName +
                            (tableHeaders[name].unit && " (" + tableHeaders[name].unit + ")")}</th>

                        )}
                    </tr>
                    </thead>
                    <tbody>
                    {Object.keys(tableData).map(row =>
                        <tr>
                            {Object.keys(tableHeaders).map(colName =>
                                <td className="has-text-centered">{tableData[row][colName.toLowerCase()]}</td>
                            )}
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
)
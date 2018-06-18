import React, { Component } from 'react';
import { connect } from '@cerebral/react'
import '../App.css';
import { state, signal, props} from "cerebral/tags";
import "../../node_modules/bulma/css/bulma.css";
import filterTable from '../computed/filterTable';


export default connect(
    {
        tableHeaders: state`menuItems.${state`componentSelection.0`}.entryOptions`,
        sortTable: signal`sortTable`,
        tableData: state`getData`,
        sortOptions: state`tableSortOptions`,
        modifyOptions: state`modifyEntry`,
        hasDelete: props`hasDelete`,
        deleteEntry: signal`deleteEntry`,
        modifyEntry: signal`modifyEntry`,
        filteredTable: filterTable
    },
    function App({ tableHeaders, tableData, sortTable, sortOptions, filteredTable, deleteEntry, hasDelete, modifyEntry,
                 modifyOptions}) {
        return (
            <div className="box has-text-centered has-scroller">
                <table className="table is-narrow" id="component-table">
                    <thead>
                    <tr>
                        {Object.keys(tableHeaders).map(name =>

                            <th className="has-text-centered is-clickable"
                            onClick={() =>
                                sortTable({
                                    headerName: name
                                })
                            }>
                                <span className="control has-icons-right">
                                    {tableHeaders[name].itemName +
                                    (tableHeaders[name].unit && " (" + tableHeaders[name].unit + ")")}
                                </span>
                            </th>
                        )}
                        {hasDelete &&
                            <th>Modify/Delete

                                <span className="icon is-right">
                                </span>
                            </th>
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {filteredTable.map(row =>
                        <tr className={modifyOptions && modifyOptions.stateID === row ?
                            "row-selected" : ""}>
                            {Object.keys(tableHeaders).map(colName =>
                                <td className="has-text-centered">{tableData[row][colName.toLowerCase()] &&
                                tableData[row][colName.toLowerCase()].strValue}</td>
                            )}
                            {hasDelete &&
                                <td className="has-text-centered">
                                    <button className="modify-button"
                                            onClick={(e) => {
                                                e.preventDefault()
                                                modifyEntry({
                                                    idToDelete: tableData[row]["_id"],
                                                    stateID: row
                                                })
                                            }}>
                                        <span className="icon is-small">
                                            <i className="far fa-edit"/>
                                        </span>
                                    </button>
                                    <button className="delete"
                                            onClick={(e) => {
                                                e.preventDefault()
                                                modifyEntry({
                                                    idToDelete: tableData[row]["_id"],
                                                    stateID: row
                                                })
                                            }}>
                                    </button>
                                </td>
                            }
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        )
    }
)
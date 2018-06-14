import React, { Component } from 'react';
import { connect } from '@cerebral/react'
import '../App.css';
import { state, signal } from "cerebral/tags";
import "../../node_modules/bulma/css/bulma.css";
import sortedTable from '../computed/sortTable';
import filterTable from '../computed/filterTable';


export default connect(
    {
        tableHeaders: state`menuItems.${state`componentSelection.0`}.entryOptions`,
        sortTable: signal`sortTable`,
        tableData: state`getData`,
        sortOptions: state`tableSortOptions`,
        sortedTable: sortedTable,
        filteredTable: filterTable
    },
    function App({ tableHeaders, tableData, sortTable, sortedTable, sortOptions, filteredTable}) {
        return (
            <div className="box is-table">
                <table className="table is-striped">
                    <thead>
                    <tr>
                        {Object.keys(tableHeaders).map(name =>

                            <th className="has-text-centered"
                            onClick={() =>
                                sortTable({
                                    headerName: name
                                })
                            }>
                                <span className="control has-icons-right">
                                    {tableHeaders[name].itemName +
                                    (tableHeaders[name].unit && " (" + tableHeaders[name].unit + ")")}
                                </span>
                                {sortOptions.value === name && sortOptions.sortDescending === true &&
                                <span className="icon is-right">
                                        <svg className="fa fa-angle-down"/>
                                </span>
                                }
                                {sortOptions.value === name && sortOptions.sortDescending === false &&
                                <span className="icon is-right">
                                        <svg className="fa fa-angle-up"/>
                                </span>
                                }
                            </th>
                        )}
                    </tr>
                    </thead>
                    <tbody>
                    {filteredTable.map(row =>
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
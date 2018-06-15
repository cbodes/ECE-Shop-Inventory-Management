
import { set, toggle, unset, when, merge } from 'cerebral/operators'
import { props, state } from 'cerebral/tags'
import * as actions from './actions'
import * as helpers from '../helpers'


export const sortTable = [
    when(props`headerName`, state`tableSortOptions.value`, (newValue, oldValue) => newValue === oldValue), {
        true: toggle(state`tableSortOptions.sortDescending`),
        false: set(state`tableSortOptions.sortDescending`, true)
    },
    set(state`tableSortOptions.value`, props`headerName`),
];

export const changeMenuSelection = [
    actions.clearEntries,
    when(state`componentSelection`, props`menuSelection`, (oldSelection, newSelection) =>
        newSelection.length < oldSelection.length && helpers.compareArray(newSelection.slice(0, oldSelection.length), oldSelection)), {
            true: [],
            false: set(state`componentSelection`, props`menuSelection`),
    },
    actions.getData
];

export const cancelEntry = [
    unset(state`modifyEntry`),
    actions.clearEntries
];

export const modifyEntry =[
    actions.modifyEntry,
    merge(state`modifyEntry`, {
        serverID: props`idToDelete`,
        stateID: props`stateID`,
    })
];

export const deleteEntry =[
    actions.deleteEntry,
    unset(state`getData.${props`stateID`}`, {})
];


export const changePage = [
    set(state`currentPage`, props`newPage`),
];


export const toggleFilter = [
    toggle(state`menuItems.${state`componentSelection.0`}.filterOptions.${props`filterName`}.showBody`)
]

export const activateMenu = [
    toggle(state`menuIsActive`)
]

export const submitEntry = [
    actions.submitEntry,
    actions.getData
]

export const changeFilterValue = [
    when(props`newValue`, (newValue) => !newValue), {
        true: set(state`menuItems.${state`componentSelection.0`}.filterOptions.${props`entryName`}.filterIsSet`, false),
        false: set(state`menuItems.${state`componentSelection.0`}.filterOptions.${props`entryName`}.filterIsSet`, true)
    },
    when(props`field`, (subField) => subField !== undefined), {
        true: [set(state`menuItems.${state`componentSelection.0`}.filterOptions.${props`entryName`}.${props`field`}`, props`newValue`),
            set(state`menuItems.${state`componentSelection.0`}.filterOptions.${props`entryName`}.isRange`, true),
            set(state`menuItems.${state`componentSelection.0`}.filterOptions.${props`entryName`}.value`, ""),],
        false: [set(state`menuItems.${state`componentSelection.0`}.filterOptions.${props`entryName`}.value`, props`newValue`),
            set(state`menuItems.${state`componentSelection.0`}.filterOptions.${props`entryName`}.isRange`, false),
            set(state`menuItems.${state`componentSelection.0`}.filterOptions.${props`entryName`}.min`, ""),
            set(state`menuItems.${state`componentSelection.0`}.filterOptions.${props`entryName`}.max`, ""),]
    }
];

export const changeEntryValue = [
    set(state`menuItems.${state`componentSelection.0`}.entryOptions.${props`entryName`}.value`, props`newValue`)
];

export const clearMenuSelection = [
    set(state`componentSelection`, [])
];

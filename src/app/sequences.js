
import { set, toggle, unset, when } from 'cerebral/operators'
import { props, state } from 'cerebral/tags'
import * as actions from './actions'
import * as helpers from '../helpers'
import {addSelection} from "./actions";

/*export const changeMenuSelection = [
    when(state`componentSelection`, props`componentName`, (newSelection, oldSelection) => newSelection === oldSelection), {
        true: [set(state`componentSelection`, props`componentName`)],
        false: [set(state`componentSelection`, props`componentName`), set(state`subComponentSelection`, [])],
    }
];*/

export const changeMenuSelection = [
    when(state`componentSelection`, props`menuSelection`, (oldSelection, newSelection) =>
        newSelection.length < oldSelection.length && helpers.compareArray(newSelection.slice(0, oldSelection.length), oldSelection)), {
            true: [],
            false: set(state`componentSelection`, props`menuSelection`),
    }
];


export const clearMenuSelection = [
    set(state`componentSelection`, [])
];

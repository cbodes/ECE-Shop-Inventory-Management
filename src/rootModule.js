import { Module } from 'cerebral'
import * as sequences from './sequences'

export default Module({
    state: {
        componentSelection: [],
        menuItems: [
            ["Resistors", [
                ["Through-hole", ["fuck", "shit"]],
                ["Surface Mount", ["a", "b"]],
                ["Power"],
            ]],
            ["Inductors",   ["Through-hole", "Surface Mount"]],
            ["Capacitors",  ["Through-hole", "Surface Mount"]],
            ["IC's",        ["Through-hole", "Surface Mount"]],
            ["Transistors", [
                ["NPN", ["BJT", "MOSFET"]],
                ["PNP", ["BJT", "MOSFET"]],
            ]],
            ["Equipment", []],
        ],
    },
    signals: {
        menuSelectionChanged: sequences.changeMenuSelection,
    },
    providers: {
            test: {
                testFunc: () => console.log('test')
            }

    },
    modules: {
    },
})

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
            ["Connectors", []],
            ["Wires", []],
            ["Equipment", ["Tools", "Lab Instruments"]],

        ],
    },
    signals: {
        menuSelectionChanged: sequences.changeMenuSelection,
        clearMenuSelection: sequences.clearMenuSelection,
    },
    providers: {
            test: {
                testFunc: () => console.log('test')
            }

    },
    modules: {
    },
})

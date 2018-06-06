import { Module } from 'cerebral'
import * as sequences from './sequences'

export default Module({
    state: {
        componentSelection: ["Resistors"],
        menuIsActive: false,
        menuItems : {
            "Resistors" : {
                iconName: "resistor_icon.png",
                filterOptions: {
                    Value : "Text",
                },
                entryOptions: {
                    Location: {
                        unit: "",
                        type: "Text",
                        value: ""
                    },
                    Value: {
                        unit: "Ω",
                        type: "Text"
                    },
                    Tolerance: {
                        unit: "%",
                        type: "Text"
                    },
                    Power: {
                        unit: "W",
                        type: "Text"
                    },
                    "Package": {
                        unit: "",
                        type: "Radio",
                        options: ["Through-hole", "Surface Mount"],
                        value: "Through-hole"
                    },
                    "Package Size" : {
                        type: "Dropdown",
                        options: ["0402", "0603", "0805", "1206"],
                        value: "0402",
                        isActive: ["Package", "Surface Mount"],
                        unit: ""
                    }
                }
            },
            "Capacitors" : {
                iconName: "capacitor_icon.png",
                filterOptions: {

                },
                entryOptions: {
                    Location: {
                        unit: "",
                        type: "Text",
                    },
                    Value: {
                        unit: "F",
                        type: "Text"
                    },
                    Material: {
                        unit: "",
                        type: "Dropdown",
                        options: [ "Ceramic", "Electrolytic", "Tantalum"],
                        value: "Ceramic"
                    },
                    Tolerance: {
                        unit: "%",
                        type: "Text"
                    },
                    "Voltage Rating": {
                        unit: "V",
                        type: "Text"
                    },
                    "Package": {
                        unit: "",
                        type: "Radio",
                        options: ["Through-hole", "Surface Mount"],
                        value: "Through-hole"
                    },
                    "Package Size" : {
                        type: "Dropdown",
                        options: ["0402", "0603", "0805", "1206"],
                        value: "0402",
                        isActive: ["Package", "Surface Mount"],
                        unit: ""
                    }
                }
            },
            "Inductors" : {
                iconName: "inductor_icon.png",
                filterOptions: {

                },
                entryOptions: {
                    Location: {
                        unit: "",
                        type: "Text",
                    },
                    Value: {
                        unit: "H",
                        type: "Text"
                    },
                    Tolerance: {
                        unit: "%",
                        type: "Text"
                    },
                    Power: {
                        unit: "W",
                        type: "Text"
                    },
                    "Saturation Current": {
                        unit: "A",
                        type: "Text"
                    },
                    "Package": {
                        unit: "",
                        type: "Radio",
                        options: ["Through-hole", "Surface Mount"],
                        value: "Through-hole"
                    }
                }
            },
            "BJT's" : {
                iconName: "bjt_icon.png",
                filterOptions: {

                },
                entryOptions: {
                    Location: {
                        unit: "",
                        type: "Text",
                    },
                    "Part Number": {
                        unit: "",
                        type: "Text"
                    },
                    "Doping": {
                        unit: "",
                        type: "Radio",
                        options: ["NPN", "PNP"],
                        value: "NPN"
                    },
                    "Beta Value": {
                        unit: "",
                        type: "Text"
                    },
                    "Max Ic": {
                        unit: "A",
                        type: "Text"
                    },
                    "Max Vce": {
                        unit: "V",
                        type: "Text"
                    },
                    "Max Vbe": {
                        unit: "V",
                        type: "Text"
                    },
                    "Power": {
                        unit: "W",
                        type: "Text"
                    },
                }
            },
            "FET's" : {
                iconName: "fet_icon.png",
                filterOptions: {

                },
                entryOptions: {
                    Location: {
                        unit: "",
                        type: "Text",
                    },
                    "Part Number": {
                        unit: "",
                        type: "Text"
                    },
                    "Doping": {
                        unit: "",
                        type: "Radio",
                        options: ["N-Channel", "P-Channel"],
                        value: "N-Channel"
                    },
                    "Gain": {
                        unit: "",
                        type: "Text"
                    },
                    "Max Id": {
                        unit: "A",
                        type: "Text"
                    },
                    "Max Vds": {
                        unit: "V",
                        type: "Text"
                    },
                    "Max Vgs": {
                        unit: "V",
                        type: "Text"
                    },
                    "Power": {
                        unit: "W",
                        type: "Text"
                    },
                }
            },
            "Op-Amps" : {
                iconName: "amplifier_icon.png",
                filterOptions: {

                },
                entryOptions: {
                    Location: {
                        unit: "",
                        type: "Text",
                    },
                    "Part Number": {
                        unit: "",
                        type: "Text"
                    },
                    "Number In Package": {
                        unit: "",
                        type: "Text"
                    },
                    "Gain-Bandwidth": {
                        unit: "Hz",
                        type: "Text"
                    },
                    "Slew Rate": {
                        unit: "V/µs",
                        type: "Text"
                    },
                    "Package": {
                        unit: "",
                        type: "Radio",
                        options: ["Dual-Sided", "Single-Sided"],
                        value: "Dual-Sided"
                    },
                    "Max Output Current": {
                        unit: "A",
                        type: "Text"
                    },
                    "Max Overhead": {
                        unit: "V",
                        type: "Text"
                    },
                    "Common Mode": {
                        unit: "V",
                        type: "Text"
                    },
                }
            },
            "Switches" : {
                iconName: "switch_icon.png",
                filterOptions: {

                },
                entryOptions: {
                    Location: {
                        unit: "",
                        type: "Text",
                    },
                    Function: {
                        unit: "",
                        type: "Text",
                    },
                    "Current Rating": {
                        unit: "A",
                        type: "Text",
                    },
                }
            },
            "Diodes" : {
                iconName: "diode_icon.png",
                filterOptions: {

                },
                entryOptions: {
                    Location: {
                        unit: "",
                        type: "Text",
                    },
                    "Part Number": {
                        unit: "",
                        type: "Text"
                    },
                    "Type": {
                        unit: "",
                        type: "Text"
                    },
                    "Forward Voltage Drop": {
                        unit: "V",
                        type: "Text"
                    },
                    "Breakdown Voltage": {
                        unit: "V",
                        type: "Text"
                    },
                    "Max Current": {
                        unit: "A",
                        type: "Text"
                    },
                    "Power": {
                        unit: "W",
                        type: "Text"
                    }
                }
            },
            "Integrated Circuits" : {
                iconName: "ic_icon.png",
                filterOptions: {

                },
                entryOptions: {
                    Location: {
                        unit: "",
                        type: "Text",
                    },
                    "Part Number": {
                        unit: "",
                        type: "Text"
                    },
                    "Category": {
                        unit: "",
                        type: "Text"
                    },
                    "Voltage": {
                        unit: "V",
                        type: "Text"
                    },
                }
            },
            "Linear Regulators" : {
                iconName: "regulator_icon.png",
                filterOptions: {

                },
                entryOptions: {
                    Location: {
                        unit: "",
                        type: "Text",
                    },
                    "Part Number": {
                        unit: "",
                        type: "Text"
                    },
                    "Category": {
                        unit: "",
                        type: "Radio",
                        options: ["Fixed", "Adjustable"],
                        value: "Fixed"
                    },
                    "Max Vout": {
                        unit: "V",
                        type: "Text"
                    },
                    "Dropout": {
                        unit: "V",
                        type: "Text"
                    },
                    "Power": {
                        unit: "W",
                        type: "Text"
                    },
                }
            },
        },
        currentPage: "Front"
    },
    signals: {
        menuSelectionChanged: sequences.changeMenuSelection,
        clearMenuSelection: sequences.clearMenuSelection,
        changeEntryValue: sequences.changeEntryValue,
        submitEntry: sequences.submitEntry,
        menuButtonPressed: sequences.activateMenu,
        pageChangeClicked: sequences.changePage
    },
    providers: {
            test: {
                testFunc: () => console.log('test')
            }

    },
    modules: {
    },
})

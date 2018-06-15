import { Module } from 'cerebral'
import * as sequences from './sequences'
import itemIsActive from '../computed/itemIsActive'

export default Module({
    state: {
        componentSelection: ["resistor"],
        menuIsActive: false,
        menuItems : {
            resistor : {
                itemName: "Resistors",
                iconName: "resistor_icon.png",
                filterOptions: {
                    value: {
                        itemName: "Resistance",
                        unit: "Ω",
                        type: "Text",
                        canRange: true,
                        isRange: false,
                        canPrefix: true,
                        min: "",
                        max: ""
                    },
                    tolerance: {
                        itemName: "Tolerance",
                        unit: "%",
                        type: "Text"
                    },
                    power: {
                        itemName: "Power",
                        unit: "W",
                        type: "Text",
                        canPrefix: true,
                    },
                    package: {
                        itemName: "Package",
                        unit: "",
                        type: "Radio",
                        options: ["Through-hole", "Surface Mount"],
                    },
                    package_size: {
                        itemName: "Package Size",
                        type: "Dropdown",
                        options: ["0402", "0603", "0805", "1206"],
                        value: "0402",
                        isActive: ["package", "Surface Mount"],
                        unit: ""
                    }
                },
                entryOptions: {
                    location: {
                        itemName: "Location",
                        unit: "",
                        type: "Text",
                        value: ""
                    },
                    value: {
                        itemName: "Resistance",
                        unit: "Ω",
                        type: "Text",
                        canPrefix: true,
                    },
                    tolerance: {
                        itemName: "Tolerance",
                        unit: "%",
                        type: "Text"
                    },
                    power: {
                        itemName: "Power",
                        unit: "W",
                        type: "Text",
                        canPrefix: true,
                    },
                    package: {
                        itemName: "Package",
                        unit: "",
                        type: "Radio",
                        options: ["Through-hole", "Surface Mount"],
                        value: "Through-hole"
                    },
                    package_size: {
                        itemName: "Package Size",
                        type: "Dropdown",
                        options: ["0402", "0603", "0805", "1206"],
                        value: "0402",
                        isActive: ["package", "Surface Mount"],
                        unit: ""
                    }
                }
            },
            capacitor : {
                itemName: "Capacitors",
                iconName: "capacitor_icon.png",
                filterOptions: {
                    value: {
                        itemName: "Capacitance",
                        unit: "F",
                        type: "Text",
                        canPrefix: true,
                    },
                    material: {
                        itemName: "Material",
                        unit: "",
                        type: "Dropdown",
                        options: [ "Ceramic", "Electrolytic", "Tantalum"],
                        value: "Ceramic"
                    },
                    tolerance: {
                        itemName: "Tolerance",
                        unit: "%",
                        type: "Text"
                    },
                    voltage_rating: {
                        itemName: "Voltage Rating",
                        unit: "V",
                        type: "Text",
                        canPrefix: true,
                    },
                    package: {
                        itemName: "Package",
                        unit: "",
                        type: "Radio",
                        options: ["Through-hole", "Surface Mount"]
                    },
                    package_size: {
                        itemName: "Package Size",
                        type: "Dropdown",
                        options: ["0402", "0603", "0805", "1206"],
                        value: "0402",
                        isActive: ["package", "Surface Mount"],
                        unit: ""
                    }
                },
                entryOptions: {
                    location: {
                        itemName: "Location",
                        unit: "",
                        type: "Text",
                    },
                    value: {
                        itemName: "Capacitance",
                        unit: "F",
                        type: "Text",
                        canPrefix: true,
                    },
                    material: {
                        itemName: "Material",
                        unit: "",
                        type: "Dropdown",
                        options: [ "Ceramic", "Electrolytic", "Tantalum"],
                        value: "Ceramic"
                    },
                    tolerance: {
                        itemName: "Tolerance",
                        unit: "%",
                        type: "Text"
                    },
                    voltage_rating: {
                        itemName: "Voltage Rating",
                        unit: "V",
                        type: "Text",
                        canPrefix: true,
                    },
                    package: {
                        itemName: "Package",
                        unit: "",
                        type: "Radio",
                        options: ["Through-hole", "Surface Mount"],
                        value: "Through-hole"
                    },
                    package_size: {
                        itemName: "Package Size",
                        type: "Dropdown",
                        options: ["0402", "0603", "0805", "1206"],
                        value: "0402",
                        isActive: ["package", "Surface Mount"],
                        unit: ""
                    }
                }
            },
            inductor : {
                itemName: "Inductors",
                iconName: "inductor_icon.png",
                filterOptions: {
                    value: {
                        itemName: "Inductance",
                        unit: "H",
                        type: "Text",
                        canPrefix: true,
                    },
                    tolerance: {
                        itemName: "Tolerance",
                        unit: "%",
                        type: "Text"
                    },
                    power: {
                        itemName: "Power",
                        unit: "W",
                        type: "Text",
                        canPrefix: true,
                    },
                    saturation_current: {
                        itemName: "Saturation Current",
                        unit: "A",
                        type: "Text",
                        canPrefix: true,
                    },
                    package: {
                        itemName: "Package",
                        unit: "",
                        type: "Radio",
                        options: ["Through-hole", "Surface Mount"],
                        value: "Through-hole"
                    }
                },
                entryOptions: {
                    location: {
                        itemName: "Location",
                        unit: "",
                        type: "Text",
                    },
                    value: {
                        itemName: "Inductance",
                        unit: "H",
                        type: "Text",
                        canPrefix: true,
                    },
                    tolerance: {
                        itemName: "Tolerance",
                        unit: "%",
                        type: "Text"
                    },
                    power: {
                        itemName: "Power",
                        unit: "W",
                        type: "Text",
                        canPrefix: true,
                    },
                    saturation_current: {
                        itemName: "Saturation Current",
                        unit: "A",
                        type: "Text",
                        canPrefix: true,
                    },
                    package: {
                        itemName: "Package",
                        unit: "",
                        type: "Radio",
                        options: ["Through-hole", "Surface Mount"],
                        value: "Through-hole"
                    }
                }
            },
            bjt : {
                itemName: "BJT's",
                iconName: "bjt_icon.png",
                filterOptions: {
                    part_number: {
                        itemName: "Part Number",
                        unit: "",
                        type: "Text"
                    },
                    doping: {
                        itemName: "Doping",
                        unit: "",
                        type: "Radio",
                        options: ["NPN", "PNP"],
                        value: "NPN"
                    },
                    beta_value: {
                        itemName: "Beta Value",
                        unit: "",
                        type: "Text",
                        canPrefix: true,
                    },
                    max_ic: {
                        itemName: "Max Ic",
                        unit: "A",
                        type: "Text",
                        canPrefix: true,
                    },
                    max_vce: {
                        itemName: "Max Vce",
                        unit: "V",
                        type: "Text",
                        canPrefix: true,
                    },
                    max_vbe: {
                        itemName: "Max Vbe",
                        unit: "V",
                        type: "Text",
                        canPrefix: true,
                    },
                    power: {
                        itemName: "Power",
                        unit: "W",
                        type: "Text",
                        canPrefix: true,
                    },
                },
                entryOptions: {
                    location: {
                        itemName: "Location",
                        unit: "",
                        type: "Text",
                    },
                    part_number: {
                        itemName: "Part Number",
                        unit: "",
                        type: "Text"
                    },
                    doping: {
                        itemName: "Doping",
                        unit: "",
                        type: "Radio",
                        options: ["NPN", "PNP"],
                        value: "NPN"
                    },
                    beta_value: {
                        itemName: "Beta Value",
                        unit: "",
                        type: "Text",
                        canPrefix: true,
                    },
                    max_ic: {
                        itemName: "Max Ic",
                        unit: "A",
                        type: "Text",
                        canPrefix: true,
                    },
                    max_vce: {
                        itemName: "Max Vce",
                        unit: "V",
                        type: "Text",
                        canPrefix: true,
                    },
                    max_vbe: {
                        itemName: "Max Vbe",
                        unit: "V",
                        type: "Text",
                        canPrefix: true,
                    },
                    power: {
                        itemName: "Power",
                        unit: "W",
                        type: "Text",
                        canPrefix: true,
                    },
                }
            },
            fet : {
                itemName: "FET's",
                iconName: "fet_icon.png",
                filterOptions: {
                    part_number: {
                        itemName: "Part Number",
                        unit: "",
                        type: "Text"
                    },
                    doping: {
                        itemName: "Doping",
                        unit: "",
                        type: "Radio",
                        options: ["N-Channel", "P-Channel"],
                        value: "N-Channel"
                    },
                    gain: {
                        itemName: "Gain",
                        unit: "",
                        type: "Text",
                        canPrefix: true,
                    },
                    max_id: {
                        itemName: "Max Id",
                        unit: "A",
                        type: "Text",
                        canPrefix: true,
                    },
                    max_vds: {
                        itemName: "Max Vds",
                        unit: "V",
                        type: "Text",
                        canPrefix: true,
                    },
                    max_vgs: {
                        itemName: "Max Vgs",
                        unit: "V",
                        type: "Text",
                        canPrefix: true,
                    },
                    power: {
                        itemName: "Power",
                        unit: "W",
                        type: "Text",
                        canPrefix: true,
                    },
                },
                entryOptions: {
                    location: {
                        itemName: "Location",
                        unit: "",
                        type: "Text",
                    },
                    part_number: {
                        itemName: "Part Number",
                        unit: "",
                        type: "Text"
                    },
                    doping: {
                        itemName: "Doping",
                        unit: "",
                        type: "Radio",
                        options: ["N-Channel", "P-Channel"],
                        value: "N-Channel"
                    },
                    gain: {
                        itemName: "Gain",
                        unit: "",
                        type: "Text",
                        canPrefix: true,
                    },
                    max_id: {
                        itemName: "Max Id",
                        unit: "A",
                        type: "Text",
                        canPrefix: true,
                    },
                    max_vds: {
                        itemName: "Max Vds",
                        unit: "V",
                        type: "Text",
                        canPrefix: true,
                    },
                    max_vgs: {
                        itemName: "Max Vgs",
                        unit: "V",
                        type: "Text",
                        canPrefix: true,
                    },
                    power: {
                        itemName: "Power",
                        unit: "W",
                        type: "Text",
                        canPrefix: true,
                    },
                }
            },
            opamp : {
                itemName: "Op-Amps",
                iconName: "amplifier_icon.png",
                filterOptions: {
                    part_number: {
                        itemName: "Part Number",
                        unit: "",
                        type: "Text"
                    },
                    number_in_package: {
                        itemName: "Number In Package",
                        unit: "",
                        type: "Text"
                    },
                    gain_bandwidth: {
                        itemName: "Gain-Bandwidth",
                        unit: "Hz",
                        type: "Text",
                        canPrefix: true,
                    },
                    slew_rate: {
                        itemName: "Slew Rate",
                        unit: "V/µs",
                        type: "Text",
                        canPrefix: true,
                    },
                    package: {
                        itemName: "Package",
                        unit: "",
                        type: "Radio",
                        options: ["Dual-Sided", "Single-Sided"],
                        value: "Dual-Sided"
                    },
                    max_output_current: {
                        itemName: "Max Output Current",
                        unit: "A",
                        type: "Text",
                        canPrefix: true,
                    },
                    max_overhead: {
                        itemName: "Max Overhead",
                        unit: "V",
                        type: "Text",
                        canPrefix: true,
                    },
                    common_mode: {
                        itemName: "Common Mode",
                        unit: "V",
                        type: "Text",
                        canPrefix: true,
                    },
                },
                entryOptions: {
                    location: {
                        itemName: "Location",
                        unit: "",
                        type: "Text",
                    },
                    part_number: {
                        itemName: "Part Number",
                        unit: "",
                        type: "Text"
                    },
                    number_in_package: {
                        itemName: "Number In Package",
                        unit: "",
                        type: "Text"
                    },
                    gain_bandwidth: {
                        itemName: "Gain-Bandwidth",
                        unit: "Hz",
                        type: "Text",
                        canPrefix: true,
                    },
                    slew_rate: {
                        itemName: "Slew Rate",
                        unit: "V/µs",
                        type: "Text",
                        canPrefix: true,
                    },
                    package: {
                        itemName: "Package",
                        unit: "",
                        type: "Radio",
                        options: ["Dual-Sided", "Single-Sided"],
                        value: "Dual-Sided"
                    },
                    max_output_current: {
                        itemName: "Max Output Current",
                        unit: "A",
                        type: "Text",
                        canPrefix: true,
                    },
                    max_overhead: {
                        itemName: "Max Overhead",
                        unit: "V",
                        type: "Text",
                        canPrefix: true,
                    },
                    common_mode: {
                        itemName: "Common Mode",
                        unit: "V",
                        type: "Text",
                        canPrefix: true,
                    },
                }
            },
            switch : {
                itemName: "Switches",
                iconName: "switch_icon.png",
                filterOptions: {
                    use: {
                        itemName: "Function",
                        unit: "",
                        type: "Text",
                    },
                    current_rating: {
                        itemName: "Current Rating",
                        unit: "A",
                        type: "Text",
                        canPrefix: true,
                    },
                },
                entryOptions: {
                    location: {
                        itemName: "Location",
                        unit: "",
                        type: "Text",
                    },
                    use: {
                        itemName: "Function",
                        unit: "",
                        type: "Text",
                    },
                    current_rating: {
                        itemName: "Current Rating",
                        unit: "A",
                        type: "Text",
                        canPrefix: true,
                    },
                }
            },
            diode : {
                itemName: "Diodes",
                iconName: "diode_icon.png",
                filterOptions: {
                    part_number: {
                        itemName: "Part Number",
                        unit: "",
                        type: "Text"
                    },
                    type: {
                        itemName: "Type",
                        unit: "",
                        type: "Text"
                    },
                    forward_voltage_drop: {
                        itemName: "Forward Voltage Drop",
                        unit: "V",
                        type: "Text",
                        canPrefix: true,
                    },
                    breakdown_voltage: {
                        itemName: "Breakdown Voltage",
                        unit: "V",
                        type: "Text",
                        canPrefix: true,
                    },
                    max_current: {
                        itemName: "Max Current",
                        unit: "A",
                        type: "Text",
                        canPrefix: true,
                    },
                    power: {
                        itemName: "Power",
                        unit: "W",
                        type: "Text",
                        canPrefix: true,
                    }
                },
                entryOptions: {
                    location: {
                        itemName: "Location",
                        unit: "",
                        type: "Text",
                    },
                    part_number: {
                        itemName: "Part Number",
                        unit: "",
                        type: "Text"
                    },
                    type: {
                        itemName: "Type",
                        unit: "",
                        type: "Text"
                    },
                    forward_voltage_drop: {
                        itemName: "Forward Voltage Drop",
                        unit: "V",
                        type: "Text",
                        canPrefix: true,
                    },
                    breakdown_voltage: {
                        itemName: "Breakdown Voltage",
                        unit: "V",
                        type: "Text",
                        canPrefix: true,
                    },
                    max_current: {
                        itemName: "Max Current",
                        unit: "A",
                        type: "Text",
                        canPrefix: true,
                    },
                    power: {
                        itemName: "Power",
                        unit: "W",
                        type: "Text",
                        canPrefix: true,
                    }
                }
            },
            intcirc : {
                itemName: "Integrated Circuits",
                iconName: "ic_icon.png",
                filterOptions: {
                    part_number: {
                        itemName: "Part Number",
                        unit: "",
                        type: "Text"
                    },
                    category: {
                        itemName: "Category",
                        unit: "",
                        type: "Text"
                    },
                    voltage: {
                        itemName: "Voltage",
                        unit: "V",
                        type: "Text",
                        canPrefix: true,
                    },
                },
                entryOptions: {
                    location: {
                        itemName: "Location",
                        unit: "",
                        type: "Text",
                    },
                    part_number: {
                        itemName: "Part Number",
                        unit: "",
                        type: "Text"
                    },
                    category: {
                        itemName: "Category",
                        unit: "",
                        type: "Text"
                    },
                    voltage: {
                        itemName: "Voltage",
                        unit: "V",
                        type: "Text",
                        canPrefix: true,
                    },
                }
            },
            linreg : {
                itemName: "Linear Regulators",
                iconName: "regulator_icon.png",
                filterOptions: {
                    part_number: {
                        itemName: "Part Number",
                        unit: "",
                        type: "Text"
                    },
                    category: {
                        itemName: "Category",
                        unit: "",
                        type: "Radio",
                        options: ["Fixed", "Adjustable"],
                        value: "Fixed"
                    },
                    max_vout: {
                        itemName: "Max Vout",
                        unit: "V",
                        type: "Text",
                        canPrefix: true,
                    },
                    dropout: {
                        itemName: "Dropout",
                        unit: "V",
                        type: "Text",
                        canPrefix: true,
                    },
                    power: {
                        itemName: "Power",
                        unit: "W",
                        type: "Text",
                        canPrefix: true,
                    },
                },
                entryOptions: {
                    location: {
                        itemName: "Location",
                        unit: "",
                        type: "Text",
                    },
                    part_number: {
                        itemName: "Part Number",
                        unit: "",
                        type: "Text"
                    },
                    category: {
                        itemName: "Category",
                        unit: "",
                        type: "Radio",
                        options: ["Fixed", "Adjustable"],
                        value: "Fixed"
                    },
                    max_vout: {
                        itemName: "Max Vout",
                        unit: "V",
                        type: "Text",
                        canPrefix: true,
                    },
                    dropout: {
                        itemName: "Dropout",
                        unit: "V",
                        type: "Text",
                        canPrefix: true,
                    },
                    power: {
                        itemName: "Power",
                        unit: "W",
                        type: "Text",
                        canPrefix: true,
                    },
                }
            },
        },
        currentPage: "Entry",
        getData: {

        },
        tableSortOptions: {
            value: "",
            sortDescending: false,
        }
    },
    signals: {
        menuSelectionChanged: sequences.changeMenuSelection,
        clearMenuSelection: sequences.clearMenuSelection,
        changeEntryValue: sequences.changeEntryValue,
        changeFilterValue: sequences.changeFilterValue,
        submitEntry: sequences.submitEntry,
        menuButtonPressed: sequences.activateMenu,
        pageChangeClicked: sequences.changePage,
        toggleFilter: sequences.toggleFilter,
        deleteEntry: sequences.deleteEntry,
        sortTable: sequences.sortTable,
        modifyEntry: sequences.modifyEntry,
        cancelEntry: sequences.cancelEntry
    },
    providers: {
            test: {
                testFunc: () => console.log('test')
            }

    },
    modules: {
    },
})

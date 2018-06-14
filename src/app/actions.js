import React from 'react'

let serverPath = 'https://128.46.74.195:3000';

if (process.env.PORT) {
    serverPath = 'https://128.46.74.195:' + process.env.PORT;
}

export function sortTable({state, props}) {
    let ordered = {};
    const myTable = state.get(`getData`);

    let orderedArray = Object.keys(myTable).sort((function(a, b) {
        return parseFloat(myTable[a][props.headerName]) > parseFloat(myTable[b][props.headerName]) ? 1 :
            parseFloat(myTable[a][props.headerName]) < parseFloat(myTable[b][props.headerName]) ? -1: 0;
    }));

    for (let item in orderedArray) {
        ordered[item] = myTable[orderedArray[item]];
    }

    state.set(`getData`, ordered)
}

export function clearEntries ({state}) {
    const currComp = state.get(`componentSelection.0`);
    const entries = state.get(`menuItems`);
    for (let item in entries[currComp].filterOptions) {
        state.set(`menuItems.${currComp}.filterOptions.${item}.value`, "")
        state.set(`menuItems.${currComp}.filterOptions.${item}.min`, "")
        state.set(`menuItems.${currComp}.filterOptions.${item}.max`, "")
        state.set(`menuItems.${currComp}.filterOptions.${item}.filterIsSet`, false)
        state.set(`menuItems.${currComp}.filterOptions.${item}.showBody`, false)
    }
    for (let item in entries[currComp].entryOptions) {
        state.set(`menuItems.${currComp}.entryOptions.${item}.value`, "")
        state.set(`menuItems.${currComp}.entryOptions.${item}.filterIsSet`, false)
    }
}

export function addSelection ({state, props}) {
    //state.get(`subComponentSelection`).push(state.get(`newComponentSelection`))
    //state.set(`subComponentSelection`, + state.get(`newComponentSelection`))

    const currSelection = state.get(`componentSelection`)
    currSelection.push(props.menuSelection)
    state.set(`componentSelection`, currSelection)
}

//var http = require('http');

export function deleteEntry ({state, props}) {
    const currComp = state.get(`componentSelection`)[0];
    let data;
    let confirmationResponse;

    if (window.confirm('Are you sure you want to delete this entry?')) {
    } else {
        return
    }
    fetch(serverPath + '/api/' + currComp.toLowerCase() + '/' + props.idToDelete, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json())
        .catch(error => console.error('Error:'))
        .then(response => {
            confirmationResponse = response;
            if (confirmationResponse.confirmation === "Fail") {
                state.set(`requestError`, confirmationResponse.errReturned)
            } else {
                state.set(`requestError`, {})
            }
        })
}

export function submitEntry ({state}) {

    const componentName = state.get(`componentSelection`)[0];
    const stateObj = state.get(`menuItems.${componentName}.entryOptions`);

    let confirmationResponse;

    const objToSend = buildEntryJSON(stateObj);

    const promise = fetch(serverPath + '/api/' + componentName, {
        method: 'POST',
        body: JSON.stringify(objToSend),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
        .catch()
    .then(response => {
        confirmationResponse = response;
        if (confirmationResponse.confirmation === "Fail") {
            state.set(`requestError`, confirmationResponse.errReturned)
        } else {
            state.set(`requestError`, {})
        }
    })
}

export function getData ({state}) {
    const currComp = state.get(`componentSelection`)[0];
    const stateObj = state.get(`menuItems.${currComp}.entryOptions`);
    const filters = state.get(`menuItems.${currComp}.filterOptions`);

    let data;
    fetch(serverPath + '/api/' + currComp.toLowerCase(), {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => response.json())
        .catch(error => console.error('Error:'))
        .then(getResults => {
            if (getResults && getResults.confirmation === "Fail") {
                console.log(getResults)
                state.set(`filterError`, getResults.errReturned)
            } else {
                state.set(`filterError`, {})
            }
            if (getResults === undefined || getResults.results === undefined) {
                state.set(`getData`, {});
                return;
            }
            data = getResults.results;
            //data = adjustForPrefix(data, stateObj);
            state.set(`getData`, data);
        })
}

function createRequestPath(filterObj) {
    let requestString = "?";
    let item;

    for (item in filterObj) {
        if (filterObj[item].isActive) {
            if (filterObj[(filterObj[item].isActive)[0]].value === filterObj[item].isActive[1]) {
                requestString += item + "=" + filterObj[item].value + "&";
            }
        } else if (filterObj[item].filterIsSet) {
            requestString += item + "=" + filterObj[item].value + "&";
        }
    }

    return requestString;
}

function adjustForPrefix(myData, stateObj) {
    const conversionTree = {
        12: "T",
        9: "G",
        6: "M",
        3: "k",
        "-3": "m",
        "-6": "μ",
        "-9": "n",
        "-12": "p"
    };


    let row, item, key, newValue;
    for (row in myData) {
        for (item in myData[row]) {
            if (myData[row][item] && stateObj[item] && stateObj[item].canPrefix) {
                for (key in conversionTree) {
                    newValue = myData[row][item] / Math.pow(10, parseFloat(key));
                    if (newValue >= 1 && newValue <= 999) {
                        myData[row][item] = newValue.toString() + conversionTree[key];
                        break;
                    }
                }
            }
        }
    }
    return myData;
}

function buildEntryJSON (entryObject) {
    const conversionTree = {
        T: 12,
        G: 9,
        M: 6,
        k: 3,
        c: -2,
        m: -3,
        u: -6,
        n: -9,
        p: -12
    };

    let objToSend = {
        meta: {
            part_number: "partNumber",
            distributor: "distributor",
            quantity: 1234
        }
    };

    for (var key in entryObject) {
        if (entryObject[key].value) {
            let curValue = entryObject[key].value;
            /*const valLength = entryObject[key].value.length;
            const conversionCode = entryObject[key].value.substr(valLength - 1);

            if (conversionCode in conversionTree && entryObject[key].canPrefix) {
                let oldNum = (entryObject[key].value).slice(0, -1);
                curValue = parseFloat(oldNum.toString()) * Math.pow(10, conversionTree[conversionCode])
            }*/

            if (entryObject[key].isActive) {
                if (entryObject[(entryObject[key].isActive)[0]].value === entryObject[key].isActive[1]) {
                    objToSend[key] = curValue;
                } else {
                    objToSend[key] = "N/A";
                }
            } else if (!curValue) {
                objToSend[key] = "N/A";
            } else {
                objToSend[key] = curValue;
            }
        }
    }

    return objToSend;

}
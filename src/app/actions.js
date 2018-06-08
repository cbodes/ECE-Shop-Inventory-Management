import React from 'react'

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
    fetch('http://128.46.74.195:3000' + '/api/' + currComp.toLowerCase() + '/' + props.idToDelete, {
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
        })
}

export function submitEntry ({state}) {

    const componentName = state.get(`componentSelection`)[0];
    const stateObj = state.get(`menuItems.${componentName}.entryOptions`);

    let confirmationResponse;

    const objToSend = buildEntryJSON(stateObj);

    const promise = fetch('http://128.46.74.195:3000' + '/api/' + componentName, {
        method: 'POST',
        body: JSON.stringify(objToSend),
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.json())
        .catch( )
    .then(response => {
        confirmationResponse = response;
        console.log(confirmationResponse);
    })
}

export function getData ({state}) {
    const currComp = state.get(`componentSelection`)[0];
    let data;
    fetch('http://128.46.74.195:3000' + '/api/' + currComp.toLowerCase(), {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
    })

        .then(response => response.json())
        .catch(error => console.error('Error:'))
        .then(getResults => {
            data = getResults;
            if (data === undefined) {
                return;
            }
            state.set(`getData`, data.results);
        })
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
            const valLength = entryObject[key].value.length;
            const conversionCode = entryObject[key].value.substr(valLength - 1);

            if (conversionCode in conversionTree && entryObject[key].canPrefix) {
                let oldNum = (entryObject[key].value).slice(0, -1);
                curValue = parseInt(oldNum.toString()) * Math.pow(10, conversionTree[conversionCode])
            }

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
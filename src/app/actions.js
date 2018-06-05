export function addSelection ({state, props}) {
    //state.get(`subComponentSelection`).push(state.get(`newComponentSelection`))
    //state.set(`subComponentSelection`, + state.get(`newComponentSelection`))

    const currSelection = state.get(`componentSelection`)
    currSelection.push(props.menuSelection)
    state.set(`componentSelection`, currSelection)
}

//var http = require('http');

export function submitEntry ({state, props}) {

    const stateObj = state.get(`menuItems.${props.componentName}.entryOptions`);
    let objToSend = {
        meta: {
            part_number: "test",
            distributor: "fuck",
            quantity: 6969
        }
    };

    for (var key in stateObj) {
        objToSend[key.toLowerCase()] = stateObj[key].value;
    }
    console.log(JSON.stringify(objToSend));

    fetch('http://128.46.74.195:3000' + '/api/' + props.componentName.toLowerCase(), {
        method: 'POST',
        mode: "cors",
        body: JSON.stringify(objToSend),
        headers: {
            'Content-Type': 'application/json',
        },
    }).catch(console.log)

    /*var post_options = {
        host: 'http://128.46.74.195',
        port: '3000',
        path: '/api/' + props.componentName,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(objToSend)
        }
    };

    // Set up the request
    var post_req = http.request(post_options, function(res) {
        res.setEncoding('utf8');
        res.on('data', function (chunk) {
            console.log('Response: ' + chunk);
        });
    });

    // post the data
    post_req.write(objToSend);
    post_req.end();*/
}
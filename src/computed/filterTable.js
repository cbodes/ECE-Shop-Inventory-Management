import { Compute } from 'cerebral'
import { state } from 'cerebral/tags'


export default  Compute(state`getData`, state`menuItems.${state`componentSelection.0`}.filterOptions`, (data, filters) => {
    let viewData = Object.keys(data);
    let filt;


    for (filt in filters) {
        if (filters[filt].filterIsSet) {
            if (filters[filt].isRange) {
                let minVal = convertFromPrefix(filters[filt].min);
                let maxVal = convertFromPrefix(filters[filt].max);
                if (minVal === "") {
                    minVal = -Infinity;
                }
                if (maxVal === "") {
                    maxVal = Infinity;
                }
                viewData = viewData.filter(item => {
                    const myItem = parseFloat(data[item][filt]);
                    return (myItem <= parseFloat(maxVal) && myItem >= parseFloat(minVal));
                });
            } else {
                const filtVal = convertFromPrefix(filters[filt].value);
                viewData = viewData.filter(item => {
                    const myItem = data[item][filt].toString();
                    return myItem === filtVal.toString();
                });
            }
        }
    }

    return viewData;
})

function convertFromPrefix (valStr) {
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

    let filtVal = valStr.toString().trim();
    const prefix = filtVal.substr(filtVal.length - 1);

    if (prefix in conversionTree) {
        filtVal = filtVal.slice(0, -1) * Math.pow(10, conversionTree[prefix])
    }

    return filtVal;
}
import { Compute } from 'cerebral'
import { state } from 'cerebral/tags'


export default Compute(state`tableSortOptions`,
    state`getData`, state`menuItems.${state`componentSelection.0`}.filterOptions`,
    (sortType, data, filters) => {



    let viewData = Object.keys(data);
    let filt;
    let orderedArray;


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
                    const myItem = parseFloat(data[item][filt].value);
                    return (myItem <= parseFloat(maxVal) && myItem >= parseFloat(minVal));
                });
            } else {
                const filtVal = convertFromPrefix(filters[filt].value);
                viewData = viewData.filter(item => {
                    const myItem = data[item][filt].value.toString().toLowerCase();
                    return myItem === filtVal.toString().toLowerCase();
                });
            }
        }
    }


    if (!sortType || !sortType.value) {
        return viewData;
    }

    if (!sortType.sortDescending) {
        orderedArray = viewData.sort((function (a, b) {
            return parseFloat(data[a][sortType.value].value) > parseFloat(data[b][sortType.value].value) ? 1 :
                parseFloat(data[a][sortType.value].value) < parseFloat(data[b][sortType.value].value) ? -1 : 0;
        }));
    } else {
        orderedArray = viewData.sort((function (a, b) {
            return parseFloat(data[a][sortType.value].value) > parseFloat(data[b][sortType.value].value) ? -1 :
                parseFloat(data[a][sortType.value].value) < parseFloat(data[b][sortType.value].value) ? 1 : 0;
        }));
    }

    return orderedArray;

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
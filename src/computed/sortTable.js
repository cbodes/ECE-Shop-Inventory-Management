import { Compute } from 'cerebral'
import { state } from 'cerebral/tags'


export default  Compute(state`getData`, state`tableSortOptions`, (data, sortType) => {
        if (!sortType) {
            return Object.keys(data);
        }
        let orderedArray;

        if (!sortType.sortDescending) {
            orderedArray = Object.keys(data).sort((function (a, b) {
                return parseFloat(data[a][sortType.value]) > parseFloat(data[b][sortType.value]) ? 1 :
                    parseFloat(data[a][sortType.value]) < parseFloat(data[b][sortType.value]) ? -1 : 0;
            }));
        } else {
            orderedArray = Object.keys(data).sort((function (a, b) {
                return parseFloat(data[a][sortType.value]) > parseFloat(data[b][sortType.value]) ? -1 :
                    parseFloat(data[a][sortType.value]) < parseFloat(data[b][sortType.value]) ? 1 : 0;
            }));
        }

        return orderedArray;
    }
)
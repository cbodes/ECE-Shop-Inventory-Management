import { Compute } from 'cerebral'
import { state, props } from 'cerebral/tags'


export default  Compute(props`activePath`, (path, get) => {
    const test = path;
        return false;
    }
)
export function addSelection ({state, props, test}) {
    //state.get(`subComponentSelection`).push(state.get(`newComponentSelection`))
    //state.set(`subComponentSelection`, + state.get(`newComponentSelection`))

    const currSelection = state.get(`componentSelection`)
    currSelection.push(props.menuSelection)
    state.set(`componentSelection`, currSelection)
}
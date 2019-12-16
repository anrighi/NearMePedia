const positionReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_LOCATION':
            console.log('long' + action.coord.long)
            console.log(action.coord.lat)
            return Object.assign({}, state, action.coord)
        default:
            return state
    }
}

export default positionReducer

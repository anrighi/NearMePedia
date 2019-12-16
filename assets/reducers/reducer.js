const positionReducer = (state = {coord:{long: '', lat: ''}}, action) => {
  switch (action.type) {
    case 'GET_LOCATION':
      console.log(action.coord.long)
      console.log(action.coord.lat)
      
      return( 
        {
          coord: { 
          long: action.coord.long,
          lat: action.coord.lat,
        }});
    default:
      return state
  }


}

export default positionReducer
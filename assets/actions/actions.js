export const getLocation = (long, lat) => ({
  type: 'GET_LOCATION',
  coord: {
  	long: long,
  	lat: lat
  }
})
export function addLocation(fields) {
  return {
    type: 'ADD_LOCATION',
    fields,
  };
}

export function getLocations() {
  return {
    type: 'GET_LOCATIONS',
  };
}

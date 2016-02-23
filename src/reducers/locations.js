const initialState = {
  locations: [{
    name: 'Location1',
    votedBy: 'Isaac',
  },
  {
    name: 'Location2',
    votedBy: 'Brent',
  }],
};
export function locations(state = initialState, action) {
  switch (action.type) {
    case 'GET_LOCATIONS':
      return {
        ...state,
        locations: [
          ...state.locations, {
            text: action.fields.name.value,
          },
        ],
      };
    case 'ADD_LOCATION':
      return {
        ...state,
        locations: [
          ...state.locations,
          action.location
        ],
      };
    default:
      return state;
  }
}

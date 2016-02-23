const initialState = {
  nominations: [],
};
export function nominations(state = initialState, action) {
  switch (action.type) {
    case 'ADD_NOMINATION':
      console.log(action.fields);
      return {
        ...state,
        nominations: [
          ...state.nominations,
          action.fields.name.value,
        ],
      };
    default:
      return state;
  }
}

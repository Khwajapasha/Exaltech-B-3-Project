// pure function
// accept two parameter state & action
// it aceepts pre-state and action payload and return new state
export const FormOneReducer = (state = [], action) => {
  if (action.type === "FORM_ONE_DATA") {
    return [...state, action.payload];
  } else return state;
};

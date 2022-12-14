export const NavigatioReducer = (
  state = [
    { name: "khwaja", link: "https://www.google.com", target: "_blank" },
  ],
  action
) => {
  if (action.type === "ADD_LINK") {
    return [...state, action.data];
  } else return state;
};

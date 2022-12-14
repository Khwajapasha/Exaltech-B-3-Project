export const CarouselReducer = (
  state = [
    {
      carouselImage: "logo192.png",
      carouselTitle: "First Slide",
      carouselDesc: "sdfjhsfhgsdjhfsjhf",
    },
    {
      carouselImage: "logo192.png",
      carouselTitle: "Second Slide",
      carouselDesc: "sdfjhsfhgsdjhfsjhf",
    },
  ],
  action
) => {
  if (action.type === "ADD_CAROUSEL") {
    return [...state, action.payload];
  } else return state;
};

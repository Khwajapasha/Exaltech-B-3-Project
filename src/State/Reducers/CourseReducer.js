export const CourseReducer = (
  state = [
    {
      courseImg:
        "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png",
      courseTitle: "HTML",
      courseDesc: "Hyper Text Markup Lanuage",
    },
  ],
  kuchbhi
) => {
  if (kuchbhi.type === "ADD_COURSES") {
    return [...state, kuchbhi.meriMarzi];
  } else return state;
};

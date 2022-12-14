import { legacy_createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { FormOneReducer } from "../Reducers/FormOneReducer";
import { FormTwoReducer } from "../Reducers/FormTwoReducer";
import { FormThreeReducer } from "../Reducers/FormThreeReducer";
import { NavigatioReducer } from "../Reducers/NavigationReducer";
import { CarouselReducer } from "../Reducers/CarouselReducer";
import { CourseReducer } from "../Reducers/CourseReducer";
export const configureStore = () => {
  return legacy_createStore(
    combineReducers({
      FormOneReducer,
      FormTwoReducer,
      FormThreeReducer,
      NavigatioReducer,
      CarouselReducer,
      CourseReducer,
    }),
    composeWithDevTools()
  );
};

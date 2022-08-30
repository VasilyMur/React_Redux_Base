import { INPUT_TEXT } from "./type";

const initState = {
  text: '',
}

export const inputReducer = (state = initState, action) => {
  console.log('inputReducer >', action);

  switch (action.type) {
    case INPUT_TEXT:
      return {
        ...state,
        text: action.payload,
      }
  
    default:
      return state;
  }
}

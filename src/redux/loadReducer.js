import { LOADER_ON, LOADER_OFF, ERROR_ON, ERROR_OFF } from "./type";

const initState = {
  loading: false,
  error: null,
}

export const loadReducer = (state = initState, action) => {
  console.log('loadReducer >', action);

  switch (action.type) {
    case LOADER_ON:
      return {
        ...state,
        loading: true,
      }
    
    case LOADER_OFF:
      return {
        ...state,
        loading: false,
      }
   
    case ERROR_ON:
      return {
        ...state,
        error: action.text,
      }
    
    case ERROR_OFF:
      return {
        ...state,
        error: null,
      }
  
    default:
      return state;
  }
}

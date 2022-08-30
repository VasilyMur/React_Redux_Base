import { DECREMENT, INCREMENT } from "./type";

const initState = {
  likes: 0,
}

export const likesReducer = (state = initState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        likes: state.likes + 1,
      }
    
    case DECREMENT:
      return {
        ...state,
        likes: state.likes - 1,
      }
  
    default:
      return state;
  }
}

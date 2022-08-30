import { COMMENT_CREATE, COMMENT_UPDATE, COMMENT_DELETE, COMMENTS_LOAD } from "./type";

const initState = {
  comments: [],
}

export const commentsReducer = (state = initState, action) => {
  console.log('comm red ', action);
  switch (action.type) {
    case COMMENT_CREATE:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      }
    
    case COMMENTS_LOAD:
      const commentsNew = action.payload.map(c => {
        return {
          text: c.name,
          id: c.id,
        }
      })
      return {
        ...state,
        comments: commentsNew,
      }
    
    case COMMENT_UPDATE:
      const { payload } = action;
      const { comments } = state;
      const itemIndex = comments.findIndex(comment => comment.id === payload.id);

      const nextComments = [
        ...comments.slice(0, itemIndex),
        payload,
        ...comments.slice(itemIndex + 1),
      ];

      return {
        ...state,
        comments: nextComments,
      }

    case COMMENT_DELETE:
      const { id } = action;

      return {
        ...state,
        comments: [...state.comments.filter(c => c.id !== id)],
      }
  
    default:
      return state;
  }
}

import { DECREMENT, INCREMENT, INPUT_TEXT, COMMENT_CREATE, COMMENT_UPDATE, COMMENT_DELETE, COMMENTS_LOAD, LOADER_ON, LOADER_OFF, ERROR_ON, ERROR_OFF } from "./type";

export function incrementLikes() {
  return {
    type: INCREMENT,
  }
}

export function decrementLikes() {
  return {
    type: DECREMENT,
  }
}

export function inputText(text) {
  return {
    type: INPUT_TEXT,
    payload: text,
  }
}

export function commentCreate(text, id) {
  return {
    type: COMMENT_CREATE,
    payload: { text, id },
  }
}

export function commentUpdate(text, id) {
  return {
    type: COMMENT_UPDATE,
    payload: { text, id },
  }
}

export function commentDelete(id) {
  return {
    type: COMMENT_DELETE,
    id,
  }
}

export function loaderOn() {
  return {
    type: LOADER_ON,
  }
}

export function loaderOff() {
  return {
    type: LOADER_OFF,
  }
}

export function errorOn(text) {
  return dispatch => {
    dispatch({
      type: ERROR_ON,
      text,
    });

    setTimeout(() => {
      dispatch(errorOff());
    }, 2000);
  }
}

export function errorOff() {
  return {
    type: ERROR_OFF,
  }
}

export function commentsLoad() {
  return async dispatch => {
    try {
      dispatch(loaderOn());
      const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
      const jsonData = await response.json();
      setTimeout(() => {
        dispatch({
          type: COMMENTS_LOAD,
          payload: jsonData,
        });
      dispatch(loaderOff());
      }, 2000);
    } catch (error) {
      dispatch(errorOn('Error API'));
      dispatch(loaderOff());
    }
  }
}

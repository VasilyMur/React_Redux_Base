import { errorOn } from "./actions";
import { COMMENT_CREATE } from "./type"

const badWords = ['stupid', 'fool'];

export function spamFilter(store) {
  return function(next) {
    return function(action) {
      if (action.type === COMMENT_CREATE) {
        const hasBadWords = badWords.some(w => action.payload.text.includes(w));

        if (hasBadWords) {
          return store.dispatch(errorOn('Be respectfull'));
        }
      }

      return next(action);
    }
  }
}

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { commentUpdate, commentDelete } from "./redux/actions";

export function SingleComment({ data }) {
  const [commentText, setCommentText] = useState('');
  const dispatch = useDispatch();
  const { text, id } = data;

  useEffect(() => {
    if (text) {
      setCommentText(text);
    }
  }, [text]);

  const handleInput = (e) => {
    setCommentText(e.target.value);
  }

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(commentUpdate(commentText, id));
  }

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(commentDelete(id));
  }

  return (
      <form className="comments-item" onSubmit={handleUpdate}>
        <div onClick={handleDelete} className="comment-item-delete" style={{ cursor: 'pointer' }}>&times; </div>
        <input type='text' value={commentText} onChange={handleInput}></input>
        <input type='submit' hidden></input>
      </form>
  )
}

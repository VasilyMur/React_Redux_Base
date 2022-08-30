import { SingleComment } from "./SingleComment";
import { useState, useEffect } from "react";
import uniqid from 'uniqid';
import { commentCreate, commentsLoad } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";

export function Comments(props) {
  const [textComment, setTextComment] = useState('');
  const dispatch = useDispatch();
  const comments = useSelector(state => {
    const { commentsReducer } = state;
    return commentsReducer.comments;
  });

  const handleInput = (e) => {
    console.log('input>>>>> ', e.target.value);
    setTextComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqid();
    dispatch(commentCreate(textComment, id));
  }

  useEffect(() => {
    dispatch(commentsLoad());
  }, []);

  return (
    <div className="card-comments">
      <form onSubmit={handleSubmit} className="comments-item-create">
        <input type='text' value={textComment} onChange={handleInput}></input>
        <input type='submit' hidden></input>
      </form>
      {comments.length && comments.map(comment => (
      <SingleComment key={comment.id} data={comment}/>
      ))}
    </div>
  )
}

import { connect } from 'react-redux';
import { decrementLikes, incrementLikes } from './redux/actions';

function Likes(props) {
  console.log('render>', props);
  return (
    <div className="button-controls">
      <button onClick={props.onIncrementLikes}>🖤 {props.likes}</button>
      <button onClick={props.onDecrementLikes}>
        Dislike
      </button>
    </div> 
  )
}

function mapStateToProps(state) {
  const { likesReducer } = state;
  return {
    likes: likesReducer.likes,
  }
}

function mapDispatchToProps(dispatch) {
  console.log('render >', dispatch);
  return {
    onIncrementLikes: () => {
      return dispatch(incrementLikes());
    },
    onDecrementLikes: () => {
      return dispatch(decrementLikes());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
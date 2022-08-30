import './App.css';
import { useSelector } from "react-redux";
import Likes from './likes';
import { Title } from './Title';
import { Comments } from './comments';
import { Spin } from './Spin'

function App() {
  const error = useSelector(state => state.loadReducer.error);
  console.log('error>>>>>', error);

  return (
    <div className="App">
      <div className="wrap">
        <Spin />
        <div className="card">
          {error && (
            <div className='error-message'>
              {error}
            </div>
          )}
          <div className="card-image">
            <img src="./sea.jpg" alt="surfing"/>
            <Title />
            <Likes />
          </div>
          <Comments />
        </div>
      </div>
    </div>
  );
}

export default App;

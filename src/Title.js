import { useDispatch, useSelector } from "react-redux";
import { inputText } from "./redux/actions";

export function Title(props) {
  console.log('props Title> ', props);
  const text = useSelector(state => {
    console.log('state>>>>>>', state);
    const { inputReducer } = state;
    return inputReducer.text;
  })
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(inputText(e.target.value));
  };

  return (
    <div className='card-title'>
      <div card-title-top>
        <input type='text' onChange={handleChange}>
        </input>
        <p>{text}</p>
      </div>
    </div>
  )
}

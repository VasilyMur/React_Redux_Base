import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";

export const Spin = (props) => {
  const spinner = useSelector(state => state.loadReducer.loading);
  console.log('spinner', spinner);

  return (
    <div className="loader-styles">
      <Loader visible={spinner}/>
    </div>
  )
}

import { useDispatch, useSelector } from "react-redux";
import { dec, inc } from "./counterSlice";

export const ReduxApp = () => {
  const selectedData = useSelector((data) => {
    return data;
  });
  const dispatch = useDispatch();
  function dataInc() {
    dispatch(inc());
  }
  function datadec(params) {
    dispatch(dec());
  }
  return (
    <div>
      <div>
        <input value={selectedData.value} />
        <button onClick={dataInc}>+</button>
      </div>
      <div>
        <input value={selectedData.value} />
        <button onClick={datadec}>-</button>
      </div>
      <h3>Number:{selectedData.value}</h3>
    </div>
  );
};

import { Provider } from "react-redux";
import { ReduxApp } from "./ReduxApp/ReduxApp";
import { store } from "./ReduxApp/store";

export const MainRedux = () => {
  return (
    <div>
      <Provider store={store}>
        <ReduxApp />
      </Provider>
    </div>
  );
};

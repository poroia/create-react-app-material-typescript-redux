import { Typography } from "@material-ui/core";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import configureStore from "./redux/configureStore";

const { persistor, store } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate
      loading={<Typography>Loading...</Typography>}
      persistor={persistor}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

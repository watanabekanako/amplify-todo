import React from "react";
import ReactDOM from "react-dom";
import { Amplify } from "aws-amplify";
import "./index.css";
import App from "./App";
import { store } from "./stores/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { ChakraProvider } from "@chakra-ui/react";

import amplifyconfig from "./amplifyconfiguration.json";
Amplify.configure(amplifyconfig);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

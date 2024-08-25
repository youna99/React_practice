// App.js
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/index";
import ShoppingSearch from "./components/ShoppingSearch";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Naver Shopping Search</h1>
        <ShoppingSearch />
      </div>
    </Provider>
  );
}

export default App;

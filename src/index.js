import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/stateInit.js';
import {BrowserRouter} from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={store.getState()}
        addPost={store.addPost.bind(store)}
        updateNewPostText={store.updateNewPostText}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);

serviceWorker.unregister();

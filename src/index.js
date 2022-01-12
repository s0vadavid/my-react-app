import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogs = [
    { id: "1", name: "Dimych" },
    { id: "2", name: "Andrew" },
    { id: "3", name: "Sveta" },
    { id: "4", name: "Sasha" },
    { id: "5", name: "Viktor" },
    { id: "6", name: "Valera" },
  ];
  
  let messages = [
    { id: "1", message: "Hi" },
    { id: "2", message: "How are you?" },
    { id: "3", message: "Yo" },
    { id: "4", message: "Yo" },
    { id: "5", message: "Yo" },
  ];

let posts = [
    {id: '1', message: 'Hi,how are you?', likesCount: 12},
    {id: '2', message: "It's my first post", likesCount: 11},
    {id: '3', message: "Ok", likesCount: 99}
  ];

ReactDOM.render(<App posts={posts} dialogs={dialogs} messages={messages} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

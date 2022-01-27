import "./index.css";
import * as serviceWorker from "./serviceWorker";
import state from "./redux/stateInit.js";
import { rerenderEntireTree } from "./render";

rerenderEntireTree(state);

serviceWorker.unregister();

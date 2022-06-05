//npm install redux react-redux
import { createStore } from "redux"; // create a store
import { Shivi } from "./reducers";

var store = createStore(Shivi) //Shivi is reducer

export default store
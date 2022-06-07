//npm install redux react-redux
import { applyMiddleware, createStore } from "redux"; // create a store
import { Shivi } from "./reducers";
import createSaga from "redux-saga";
import { RootSaga } from "./middlewares/sagas";

var sagaMiddleware = createSaga()

var store = createStore(Shivi, applyMiddleware(sagaMiddleware)) //Shivi is reducer

sagaMiddleware.run(RootSaga)

export default store
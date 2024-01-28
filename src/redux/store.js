import { createStore, combineReducers, applyMiddleware } from "redux";
import { reducer } from "./reducers/reducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { counterReducer } from "./reducers/counterReducer";
import { thunk } from "redux-thunk";

const combined = combineReducers({
    reducer1: reducer,
    counter: counterReducer
})

export const store = createStore(combined, composeWithDevTools(applyMiddleware(thunk)))
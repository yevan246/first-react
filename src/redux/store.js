import { createStore, combineReducers } from "redux";
import { reducer } from "./reducers/reducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { counterReducer } from "./reducers/counterReducer";

const combined = combineReducers({
    reducer1: reducer,
    counter: counterReducer
})

export const store = createStore(combined, composeWithDevTools())
import * as redux from "redux";
import thunk from "redux-thunk";
// Import reducers here
import { CalculateDistance } from "../ducks/calculate";

export const configure = (initialState = {}) => {
  const reducer = redux.combineReducers({
    calculate: CalculateDistance,
  }); // Combine reducers here

  const store = redux.createStore(
    reducer,
    initialState,
    redux.compose(
      redux.applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );
    return store;
};

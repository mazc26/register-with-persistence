import * as redux from "redux";
import thunk from "redux-thunk";
// Import reducers here
import { GetCountries } from "../ducks/select-data";

export const configure = (initialState = {}) => {
  const reducer = redux.combineReducers({
    countries: GetCountries,
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

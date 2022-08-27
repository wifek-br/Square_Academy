import { applyMiddleware, createStore, combineReducers } from "redux";
 import thunk from "redux-thunk";
 import Trainings from "./reducers/Trainings";

const rootReducer = combineReducers({
  trainings: Trainings,
});

 const store = createStore(rootReducer, applyMiddleware(thunk))

 export default store;

// import { applyMiddleware, createStore } from "redux";
// import thunk from "redux-thunk";
// import reducers from "./reducers/index.js";

// const bindMiddleware = (middleware) => {
//   return applyMiddleware(...middleware);
// };

// function configureStore(initialState = {}) {
//   const store = createStore(reducers, initialState, bindMiddleware(thunk));
//   return store;
// }
// export default configureStore;

// import { createWrapper } from "next-redux-wrapper";
// import { applyMiddleware, createStore } from "redux";
// import createEncryptor from "redux-persist-transform-encrypt";
// import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
// import createSagaMiddleware from "redux-saga";
// import Config from "../config";
// import rootReducer from "./reducers/index";
// import rootSaga from "./sagas";
// import createIdbStorage from "@piotr-cz/redux-persist-idb-storage";
// import defaultStorage from "redux-persist/lib/storage";
// // import { REHYDRATE } from "redux-persist";
// const sagaMiddleware = createSagaMiddleware();

// const bindMiddleware = (middleware) => {
//   if (process.env.NODE_ENV !== "production") {
//     const { composeWithDevTools } = require("redux-devtools-extension");
//     return composeWithDevTools(applyMiddleware(...middleware));
//   }
//   return applyMiddleware(...middleware);
// };

// const reducers = (state, action) => {
//   // if (action.type === REHYDRATE) {
//   //     const nextState = {
//   //         ...state,
//   //         ...action.payload,
//   //     };
//   //     nextState.syncDataState.syncUserData = "STATUS_INIT";
//   //     if (!nextState.userReducer.userId) {
//   //         nextState.userReducer.userId = genUserId();
//   //     }
//   //     return nextState;
//   // }
//   return rootReducer(state, action);
// };

// const makeStore = ({ isServer }) => {
//   if (isServer) {
//     //If it's on server side, create a store
//     const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]));
//     sagaMiddleware.run(rootSaga);
//     return store;
//   } else {
//     //If it's on client side, create a store which will persist
//     const { persistStore, persistReducer } = require("redux-persist");
//     const encryptor = createEncryptor({
//       secretKey: Config.SECRET_KEY,
//       onError: function (error) {},
//     });
//     const storage = require("redux-persist/lib/storage").default;

//     const persistConfig = {
//       key: "root",
//       storage: globalThis.indexedDB
//         ? createIdbStorage({
//             name: "abc-elearning",
//             storeName: "reduxpersist",
//           })
//         : defaultStorage,
//       stateReconciler: autoMergeLevel2,
//       transform: [encryptor],
//       whitelist: [
//         "cardReducer",
//         "listGameState",
//         "cardProgressReducer",
//         "topicReducer",
//         "testSettingState",
//         "topicProgressReducer",
//         "stateInfoState",
//         "testInfoReducer",
//         "timeLeftReducer",
//         "userReducer",
//         "syncDataState",
//         "userStudyPlanReducer",
//       ],
//     };

//     const persistedReducer = persistReducer(persistConfig, reducers); // Create a new reducer with our existing reducer

//     const store = createStore(
//       persistedReducer,
//       bindMiddleware([sagaMiddleware])
//     ); // Creating the store again
//     store.__persistor = persistStore(store); // This creates a persistor object & push that persisted object to .__persistor, so that we can avail the persistability feature
//     sagaMiddleware.run(rootSaga);
//     return store;
//   }
// };

// // export const wrapper = createWrapper(makeStore);
// export const wrapper = createWrapper(makeStore, {
//   debug: false,
//   serializeState: (state) => JSON.stringify(state),
//   deserializeState: (state) => JSON.parse(state),
// });

import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import getProReducer from "./reducers/getPro.reducer";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  getProState:getProReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;

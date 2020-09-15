import listReducer from "../reducer/listReducer";
import postReducer from "../reducer/postReducer";
// import profileReducer from "../reducer/profileReducer";
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import logic from "../logic";
import { createLogicMiddleware } from "redux-logic";

const logicMiddleware = createLogicMiddleware(logic);

const rootReducer = combineReducers({
  listReducer,
  postReducer,
});

const config = {
  key: "root",
  storage,
  whitelist: ["listReducer"],
};

const persistedReducer = persistReducer(config, rootReducer);

const store = createStore(
  persistedReducer,
  compose(
    applyMiddleware(logicMiddleware),
    composeWithDevTools(applyMiddleware())
  )
);

const persistor = persistStore(store);

export { store, persistor };

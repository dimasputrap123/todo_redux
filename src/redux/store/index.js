import listReducer from "../reducer/listReducer";
// import profileReducer from "../reducer/profileReducer";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const rootReducer = combineReducers({
  listReducer,
});

const config = {
  key: "root",
  storage,
  whitelist: ["listReducer"],
};

const persistedReducer = persistReducer(config, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools());

const persistor = persistStore(store);

export { store, persistor };

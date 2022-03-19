import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { authReducer } from "./authReducer";

export const rootReducer = combineReducers({
  product: productReducer,
  auth: authReducer,
});

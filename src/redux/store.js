import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

export const baseURL = "http://localhost:8080/warehouse";

export const store = legacy_createStore(reducer);
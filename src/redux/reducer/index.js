import addTheUser from "./adduser";
import curentTheData from "./curentuser";
import { combineReducers } from "redux";

const rootreducer = combineReducers({ addTheUser, curentTheData });

export default rootreducer;

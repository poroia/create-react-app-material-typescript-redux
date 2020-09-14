import { combineReducers } from "redux";
import { Todo } from "../model";
import * as todoReducer from "./todo";

export interface RootState {
	todoList: Todo[];
}

export default () =>
	combineReducers({
		...todoReducer,
	});

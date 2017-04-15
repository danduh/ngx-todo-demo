import { Injectable } from '@angular/core';
import { Store, State } from "@ngrx/store";
import { TodoType } from "../app.typings";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./reducers/todos";

@Injectable()
export class TodoService {

    constructor(private _store: Store<State<TodoType>>) {
    }

    public addTodo(todo) {
        this._store.dispatch({type: ADD_TODO, payload: todo});
    }

    public deleteTodo(todo) {
        this._store.dispatch({type: DELETE_TODO, payload: todo});
    }

    public toggleTodoComplete(todo: TodoType) {
        this._store.dispatch({type: TOGGLE_TODO, payload: todo});
    }

}

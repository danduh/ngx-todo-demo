import { Injectable } from '@angular/core';
import { Store, State } from "@ngrx/store";
import { TodoType } from "../app.typings";
import { ADD_TODO } from "./reducers/todos";

@Injectable()
export class TodoService {

    constructor(private _store: Store<State<TodoType>>) {
    }

    public addTodo(todo) {
        this._store.dispatch({type: ADD_TODO, payload: todo});
    }


}

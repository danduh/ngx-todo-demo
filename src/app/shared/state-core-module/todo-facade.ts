import { Injectable } from '@angular/core';
import { Store, State } from "@ngrx/store";
import { TodoType } from "../../app.typings";
import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from "./todos-reducer";
import { Observable } from "rxjs";

@Injectable()
export class TodoFacade {
    $state;

    constructor(private _store: Store<State<TodoType>>) {
        this.$state = _store.select('todosReducer')
    }

    public getAllTodos(): Observable<TodoType[]> {
        return this.$state.map(resp => resp)
    }

    public getFilteredBy(prop): Observable<TodoType[]> {
        return this.$state.map(resp => {
            if (!!resp)
                return resp.filter((r) => r[prop])
            else return []
        })
    }

    public addTodo(todo): void {
        this._store.dispatch({type: ADD_TODO, payload: todo});
    }

    public deleteTodo(todo): void {
        this._store.dispatch({type: DELETE_TODO, payload: todo});
    }

    public toggleTodoComplete(todo: TodoType): void {
        this._store.dispatch({type: TOGGLE_TODO, payload: todo});
    }

}

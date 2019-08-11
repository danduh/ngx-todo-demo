import {Injectable} from '@angular/core';
import {Store, State} from '@ngrx/store';
import {TodoType} from '../../app.typings';
import {Observable} from 'rxjs';
import {TodosActions} from './todos-actions';
import {map} from 'rxjs/operators';

@Injectable()
export class TodoFacade {
    $state;

    constructor(private _store: Store<State<TodoType>>) {
        this.$state = _store.select('todosReducer');
    }

    public getAllTodos(): Observable<TodoType[]> {
        return this.$state.pipe(map(resp => resp));
    }

    public getFilteredBy(prop): Observable<TodoType[]> {
        return this.$state.pipe(
            map((resp: TodoType[]) => {
                if (!!resp) {
                    return resp.filter((r) => r[prop]);
                } else {
                    return [];
                }
            }));
    }

    public addTodo(todo): void {
        this._store.dispatch({type: TodosActions.ADD_TODO, payload: todo});
    }

    public deleteTodo(todo): void {
        this._store.dispatch({type: TodosActions.DELETE_TODO, payload: todo});
    }

    public toggleTodoComplete(todo: TodoType): void {
        this._store.dispatch({type: TodosActions.TOGGLE_TODO, payload: todo});
    }

}

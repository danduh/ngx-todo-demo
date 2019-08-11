import {Action} from '@ngrx/store';
import {TodosActions} from './todos-actions';



const todo = (_todo, action) => {
    switch (action.type) {
        case TodosActions.ADD_TODO:
            return action.payload;

        case TodosActions.TOGGLE_TODO:
            if (_todo.id !== action.payload.id) {
                return _todo;
            }

            return {
                ..._todo,
                completed: !_todo.completed
            };
        default:
            return _todo;
    }
};

const deleteTodo = (state, action) => {
    return state.filter((s) => s.id !== action.payload.id);
};

const filterTodos = (state, action) => {
    return state.filter((s) => s.id !== action.payload.id);
};

export class AppAction implements Action {
    type: any;
    payload: any;
}

export const TodosReducer = (state: object[] = [], action: AppAction) => {
    if (!!action) {

        switch (action.type) {
            case TodosActions.ADD_TODO:
                return [
                    ...state,
                    todo(undefined, action)
                ];

            case TodosActions.DELETE_TODO:
                return [...deleteTodo(state, action)];

            case TodosActions.TOGGLE_TODO:
                return [...state.map((t) => {
                        return todo(t, action);
                    }
                )];

            case TodosActions.FILTER_TODOS:
                return state.filter((t) =>
                    !!t[action.payload]
                );

            default:
                return state;
        }
    } else {
        return [];
    }
};

import { Reducer, Action } from "@ngrx/store";
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const FILTER_TODOS = 'FILTER_TODOS';


const todo = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return action.payload;

        case TOGGLE_TODO:
            if (state.id !== action.payload.id) {
                return state
            }

            return {
                ...state,
                completed: !state.completed
            };
        default:
            return state
    }
};

const deleteTodo = (state, action) => {
    return state.filter((s) => s.id !== action.payload.id);
};

const filterTodos = (state, action) => {
    return state.filter((s) => s.id !== action.payload.id);
};

export const todosReducer = (state: Object[] = [], action: Action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ];

        case DELETE_TODO:
            return [...deleteTodo(state, action)];

        case TOGGLE_TODO:
            return state.map((t) =>
                todo(t, action)
            );

        case FILTER_TODOS:
            return state.filter((t) =>
                !!t[action.payload]
            );

        default:
            return state
    }
};

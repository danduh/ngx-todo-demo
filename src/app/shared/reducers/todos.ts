import { Reducer, Action } from "@ngrx/store";
export const ADD_TODO = 'ADD_TODO';

const todo = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return action.payload;

        case 'TOGGLE_TODO':
            if (state.id !== action.id) {
                return state
            }

            return {
                ...state,
                completed: !state.completed
            }
        default:
            return state
    }
};

export const todosReducer = (state: Object[] = [], action: Action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                todo(undefined, action)
            ]
        case 'TOGGLE_TODO':
            return state.map((t) =>
                todo(t, action)
            )
        default:
            return state
    }
};

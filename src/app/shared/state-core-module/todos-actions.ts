export enum TodosActions {
    ADD_TODO = 'ADD_TODO',
    DELETE_TODO = 'DELETE_TODO',
    TOGGLE_TODO = 'TOGGLE_TODO',
    FILTER_TODOS = 'FILTER_TODOS',
}

export class AddTodo {
    readonly type = TodosActions.ADD_TODO;

    constructor(public payload: any) {
    }
}

export class DeleteTodo {
    readonly type = TodosActions.DELETE_TODO;

    constructor(public payload: any) {
    }

}

export class FilterTodo {
    readonly type = TodosActions.FILTER_TODOS;

    constructor(public payload: any) {
    }
}

export class ToggleTodo {
    readonly type = TodosActions.TOGGLE_TODO;

    constructor(public payload: any) {
    }
}


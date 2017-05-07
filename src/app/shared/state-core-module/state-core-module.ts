import { NgModule } from '@angular/core';
import { StoreModule, combineReducers } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { TodosReducer } from "./todos-reducer";
import { TodoFacade } from "./todo-facade";
import { StatesEffects } from "./state-effects";
import { localStorageSync } from "ngrx-store-localstorage";
import { compose } from "@ngrx/core/compose";

export const EAGER_REDUCERS = {
    todosReducer: TodosReducer
};

// StoreModule.provideStore(
//     compose(
//         localStorageSync(['todos']),
//         combineReducers
//     )({todos, visibilityFilter})
// )

export function createReducer(asyncReducers = {}) {
    let allReducers = Object.assign(EAGER_REDUCERS, asyncReducers);
    return combineReducers(allReducers);
}

export function appReducer(state: any, action: any) {
    return createReducer()(state, action);
}

@NgModule({
    imports: [
        EffectsModule.run(StatesEffects),
        StoreModule.provideStore(
            compose(
                localStorageSync(['todosReducer']),
                combineReducers
            )({TodosReducer})
        )
    ],
    providers: [
        TodoFacade
    ]
})
export class AppStateCoreModule {
}

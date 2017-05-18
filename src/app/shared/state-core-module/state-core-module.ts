import { NgModule } from '@angular/core';
import { StoreModule, combineReducers } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { TodosReducer } from "./todos-reducer";
import { TodoFacade } from "./todo-facade";
import { StatesEffects } from "./state-effects";
import { compose } from "@ngrx/core";
import { localStorageSync } from "ngrx-store-localstorage";

export const EAGER_REDUCERS = {
    todosReducer: TodosReducer
};

export function createReducer(asyncReducers = {}) {
    let allReducers = Object.assign(EAGER_REDUCERS, asyncReducers);
    return combineReducers(allReducers);
}

export function appReducer(state: any, action: any) {
    return createReducer()(state, action);
}

export function l() {
    return compose(localStorageSync(['todosReducer'], true), combineReducers)(EAGER_REDUCERS);
}

@NgModule({
    imports: [
        EffectsModule.run(StatesEffects),
        StoreModule.provideStore(compose(localStorageSync(['todosReducer'], true), combineReducers)(EAGER_REDUCERS))
    ],
    providers: [
        TodoFacade
    ]
})
export class AppStateCoreModule {
}

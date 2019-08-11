import {NgModule} from '@angular/core';
import {StoreModule,  ActionReducerMap, ActionReducer, MetaReducer} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {TodosReducer} from './todos-reducer';
import {TodoFacade} from './todo-facade';
import {StatesEffects} from './state-effects';
import {localStorageSync} from 'ngrx-store-localstorage';


const reducers: ActionReducerMap<any> = {todosReducer: TodosReducer};

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({keys: ['todos']})(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];


@NgModule({
    imports: [
        EffectsModule.forRoot([StatesEffects]),
        StoreModule.forRoot(reducers, {metaReducers})
    ],
    providers: [
        TodoFacade
    ]
})
export class AppStateCoreModule {
}

import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {tap} from 'rxjs/operators';
import {TodosActions} from './todos-actions';

@Injectable()
export class StatesEffects {
    constructor(private actions$: Actions) {
    }

    @Effect({dispatch: false}) $logger = this.actions$
        .pipe(
            ofType(TodosActions.ADD_TODO),
            tap((action: any) => {
                console.log(`State Action -> ${action.type}`, action.payload);
            }));

}

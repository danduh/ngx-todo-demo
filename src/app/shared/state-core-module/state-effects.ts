import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

@Injectable()
export class StatesEffects {
    constructor(private actions$: Actions) {
    }

    @Effect({dispatch: false}) $logger = this.actions$
        .do((action) => {
            console.log(`State Action -> ${action.type}`, action.payload);
        });

}

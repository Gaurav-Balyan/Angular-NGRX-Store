import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionTypes } from '../actions/actions';
import { FruitsService } from '../../fruits.service';

@Injectable()
export class ShopEffects {
    constructor(
        private action$: Actions,
        private fruitsService: FruitsService
    ) { }

    @Effect()
    loadFruits$ = this.action$.pipe(
        ofType(ActionTypes.LoadItems),
            mergeMap(()=> 
            this.fruitsService.getAll().pipe(
                map(fruits => {
                    return {
                        type: ActionTypes.LoadSuccess, payload: fruits
                    };
                }),
                catchError(() => EMPTY)
            )
        )
    );
}
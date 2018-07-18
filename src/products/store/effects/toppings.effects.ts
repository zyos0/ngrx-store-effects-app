import * as toppingActions from '../actions/toppings.actions';
import * as fromServices from '../../services';
import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {catchError, map, switchMap} from "rxjs/operators";
import {of} from "rxjs/observable/of";


@Injectable()
export class ToppingsEffects {
  constructor(
    private actions$: Actions, private toppingService: fromServices.ToppingsService
  ) {

  }


  @Effect()
  loadToppings$ = this.actions$.ofType(toppingActions.LOAD_TOPPINGS)
    .pipe(
      switchMap(() => {
        return this.toppingService.getToppings()
          .pipe(
            map(toppings => new toppingActions.LoadToppingsSuccess(toppings)),
            catchError(error => of(new toppingActions.LoadToppingsFail(error)))
          )
      })
    )
}

import {Injectable} from "@angular/core";
import * as fromStore from '../store'
import {CanActivate} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import {catchError, filter, switchMap, take, tap} from "rxjs/operators";
import {of} from "rxjs/observable/of";

@Injectable()
export class PizzasGuard implements CanActivate {

  constructor(private store: Store<fromStore.ProductsState>) {
  }

  canActivate(): Observable<boolean> {
    return this.checkStore()
      .pipe(
        switchMap(() => of(true)),
        catchError(() => of(false))
      )

  }


  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getPizzasLoaded).pipe(
      tap(loaded => {
        if (!loaded) {
          this.store.dispatch(new fromStore.LoadPizzas())
        }
      }),
      filter(loaded => loaded),
      take(1)
    )
  }
}

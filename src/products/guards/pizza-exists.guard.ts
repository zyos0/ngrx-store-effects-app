import {Injectable} from "@angular/core";
import {ActivatedRoute, ActivatedRouteSnapshot, CanActivate} from "@angular/router";
import {Observable} from "rxjs/Observable";
import * as fromStore from '../store';
import {tap, map, filter, take, switchMap} from 'rxjs/operators'
import {Store} from "@ngrx/store";
import {Pizza} from "../models/pizza.model";

@Injectable()
export class PizzaExistsGuard implements CanActivate {

  constructor(private store: Store<fromStore.ProductsState>) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.checkStore()
      .pipe(
        switchMap(() => {
          const id = parseInt(route.params.pizzaId, 10);
          return this.hasPizza(id)
        })
      )
  }

  hasPizza(id: number): Observable<boolean> {
    return this.store
      .select(fromStore.getPizzasEntities)
      .pipe(
        map(
          (entities: { [id: number]: Pizza }) => {
            return !!entities[id];
          }
        ),
        take(1)
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

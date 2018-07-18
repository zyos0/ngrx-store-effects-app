import * as fromPizza from './pizzas.reducer';
import {ActionReducerMap} from "@ngrx/store";

export interface ProductsState {
  pizzas: fromPizza.PizzaState
}


export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizza.reducer
};

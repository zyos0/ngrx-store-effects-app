import * as fromPizza from './pizzas.reducer';
import * as fromToppins from './toppings.reducer';
import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";


export interface ProductsState {
  pizzas: fromPizza.PizzaState;
  toppings: fromToppins.ToppingState;
}


export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizza.reducer,
  toppings: fromToppins.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>('products');

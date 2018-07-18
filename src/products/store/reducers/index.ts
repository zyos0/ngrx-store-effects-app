import * as fromPizza from './pizzas.reducer';
import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";


export interface ProductsState {
  pizzas: fromPizza.PizzaState
}


export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizza.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>('products');

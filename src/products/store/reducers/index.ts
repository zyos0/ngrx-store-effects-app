import * as fromPizza from './pizzas.reducer';
import {ActionReducerMap, createFeatureSelector, createSelector} from "@ngrx/store";


export interface ProductsState {
  pizzas: fromPizza.PizzaState
}


export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizza.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>('products');

//pizzas state
export const getPizzaState = createSelector(getProductsState, (state: ProductsState) => state.pizzas);

export const getAllPizzas = createSelector(getPizzaState, fromPizza.getPizzas);
export const getPizzasLoaded = createSelector(getPizzaState, fromPizza.getPizzasLoaded);
export const getPizzasLoading = createSelector(getPizzaState, fromPizza.getPizzasLoading);

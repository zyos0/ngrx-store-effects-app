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

export const getPizzasEntities = createSelector(getPizzaState, fromPizza.getPizzasEntities);
export const getAllPizzas = createSelector(getPizzasEntities, (entities) => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)])
});

export const getPizzasLoaded = createSelector(getPizzaState, fromPizza.getPizzasLoaded);
export const getPizzasLoading = createSelector(getPizzaState, fromPizza.getPizzasLoading);

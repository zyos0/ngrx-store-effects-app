import * as fromPizzas from '../actions/pizzas.action'
import {Pizza} from "../../models/pizza.model";

export interface PizzaState {
  data: Pizza[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: PizzaState = {
  data: [{
    "name": "Blazin' Inferno",
    "toppings": [
      {
        "id": 10,
        "name": "pepperoni"
      },
      {
        "id": 2,
        "name": "bacon"
      },
      {
        "id": 4,
        "name": "chili"
      },
      {
        "id": 12,
        "name": "tomato"
      }
    ],
    "id": 1
  }],
  loaded: false,
  loading: false
};


export function reducer(
  state = initialState,
  action: fromPizzas.PizzasAction
): PizzaState {
  switch (action.type) {
    case fromPizzas.LOAD_PIZZAS: {
      return {
        ...state,
        loading: true
      }
    }
    case fromPizzas.LOAD_PIZZAS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true
      }
    }

    case fromPizzas.LOAD_PIZZAS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      }
    }
  }

  return state;
}

export const getPizzasLoading = (state: PizzaState) => state.loading;
export const getPizzasLoaded = (state: PizzaState) => state.loaded;
export const getPizzas = (state: PizzaState) => state.data;


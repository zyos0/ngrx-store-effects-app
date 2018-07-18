import * as fromToppings from '../actions/toppings.actions'
import {Topping} from "../../models/topping.model";

export interface ToppingState {
  entities: { [id: number]: Topping };
  selectedToppings: number[]
  loading: boolean;
  loaded: boolean;
}

export const initialState: ToppingState = {
  entities: {},
  loaded: false,
  selectedToppings: [],
  loading: true
};

export function reducer(
  state = initialState, action: fromToppings.ToppingsActions
) {

  switch (action.type) {
    case fromToppings.LOAD_TOPPINGS: {
      return {
        ...state,
        loading: true
      }
    }
    case fromToppings.LOAD_TOPPINGS_SUCCESS: {
      const toppings = action.payload;
      const entities = toppings.reduce((entities: { [id: number]: Topping }, toppin: Topping) => {
        return {
          ...entities,
          [toppin.id]: toppin
        }
      }, {...state.entities});
      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      }
    }
    case fromToppings.LOAD_TOPPINGS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      }
    }
    case fromToppings.VISUALISE_TOPPINGS: {
      const selectedToppings = action.payload;
      return {
        ...state,
        selectedToppings
      }
    }
  }


  return state;
}


export const getToppingsEntities = (state: ToppingState) => state.entities;
export const getToppingsLoading = (state: ToppingState) => state.loading;
export const getToppingsLoaded = (state: ToppingState) => state.loaded;
export const getSelectedToppings = (state: ToppingState) => state.selectedToppings;
